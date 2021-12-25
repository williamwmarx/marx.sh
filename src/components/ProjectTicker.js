import React from "react"
import { Link } from "gatsby"
// import { GatsbyImage } from "gatsby-plugin-image"
import shuffle from "./shuffle.js"
import "../styles/ticker.css"
import iconMap from "../data/icon-map.json"


const ProjectTicker = ({icons}) => {
	// Randomized icons wrapped in links
	let ticker = (
		<span>
			{
				shuffle(icons).map((icon, i) => (
					iconMap[icon.node.name].internal ? (
						(iconMap[icon.node.name].link !== "") ? (
							<span>
								<Link to={iconMap[icon.node.name].link}>
									<img src={icon.node.relativePath} alt={icon.node.name} key={i}/>
									{/*
										<GatsbyImage
											image={icon.node.childImageSharp.gatsbyImageData}
											alt={icon.node.name}
											key={i}
										/>
									*/}
								</Link>
							</span>
						) : (
							<span>
								<a><img src={icon.node.relativePath} alt={icon.node.name} key={i}/></a>
							</span>
						)
					) : (
						<span>
							<a href={iconMap[icon.node.name].link} target="_blank" rel="noreferrer">
								<img src={icon.node.relativePath} alt={icon.node.name} key={i}/>
								{/*
									<GatsbyImage
										image={icon.node.childImageSharp.gatsbyImageData}
										alt={icon.node.name}
										key={i}
									/>
								*/} </a>
						</span>
					)
				))
			}
		</span>
	)

	// Random animation time
	let time = 2 * Math.floor((70 + Math.random() * 30) / 2)
	const animation1 = {
		animation: `marquee ${time}s linear infinite`,
		animationDelay: `-${time}s`,
	}
	const animation2 = {
		animation: `marquee2 ${time}s linear infinite`,
		animationDelay: `-${time / 2}s`,
	}

	return (
		<div className="ticker-wrapper">
			<hr/>
			<div className="ticker project">
				<div style={animation1}>{ticker}</div>
				<div style={animation2}>{ticker}</div>
			</div>
			<hr/>
		</div>
	)
}

export default ProjectTicker
