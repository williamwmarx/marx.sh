import React from "react"
import { graphql } from "gatsby"
import Header from "../components/Header.js"
import ProjectTicker from "../components/ProjectTicker.js"
import UserTicker from "../components/UserTicker.js"
import "../styles/index.css"


const Home = ({data}) => {
	return (
		<div>
			<Header {...data.site.siteMetadata}/>
			<ProjectTicker icons={data.allFile.edges}/>
			<UserTicker/>
			<ProjectTicker icons={data.allFile.edges}/>
			<UserTicker/>
			<ProjectTicker icons={data.allFile.edges}/>
			<UserTicker/>
			<ProjectTicker icons={data.allFile.edges}/>
			<UserTicker/>
			<ProjectTicker icons={data.allFile.edges}/>
		</div>
	)
}

export default Home


export const query = graphql`
	query IndexQuery {
		site {
			siteMetadata {
				description
			}
		}
		allFile(filter: {sourceInstanceName: {eq: "icons"}}) {
			edges {
				node {
					name
					relativePath
				}
			}
		}
	}
`

/* GATSBY IMAGE CODE

	childImageSharp {
		gatsbyImageData(backgroundColor: "#ffffff", height: 95)
	}

*/
