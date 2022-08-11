import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Draggable from 'react-draggable';
import Header from "../components/Header.js"
import "../styles/index.css"
import "../styles/window.css"

function storeRedirect() {
	window.setTimeout(function() {window.location.href = "https://gallery.marx.design"; }, 3000);
}

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			min: false,
			max: false,
			closed: false
		};
		this.minimize = this.minimize.bind(this);
		this.maximize = this.maximize.bind(this);
		this.close = this.close.bind(this);
	}

	minimize() {
		this.setState({min: true});
		storeRedirect();
	}

	maximize() {
		this.setState({max: true});
		storeRedirect();
	}

	close() {
		this.setState({closed: true});
		storeRedirect();
	}

	render() {
		console.log(this.state)
		let overlayVisibility = (this.state.min | this.state.max | this.state.closed) ? "visible" : "hidden";
		let overlayText;
		if (this.state.min) {
			overlayText = "DO NOT MINIMIZE THE ROLE OF COMMERCE";
		} else if (this.state.max) {
			overlayText = "BUY NOW CRY LATER";
		} else if (this.state.closed) {
			overlayText = "NICE TRY BUCKO";
		}

		return (
			<div className="root">
				{/*Header*/}
				<Header/>

				{/*Curated Vacancy Art Store Window*/}
				<Draggable defaultPosition={{x: 0, y: 0}}>
					<div className="window">
						<div className="title-bar">
							<div className="title-bar-text">“Curated Vacancy” Art Store</div>
							<div className="title-bar-controls">
								<button aria-label="Minimize" onClick={this.minimize}/>
								<button aria-label="Maximize" onClick={this.maximize}/>
								<button aria-label="Close" onClick={this.close}/>
							</div>
						</div>
						<div className="window-body">
							<Link to="https://gallery.marx.design">
								<StaticImage src="../images/curated_vacancy.jpg" alt="“Curated Vacancy” Art Store"/>
							</Link>
						</div>
					</div>
				</Draggable>

				{/*Archive*/}
				<Draggable defaultPosition={{x: 0, y: 0}}>
					<Link to="https://atemp.studio" id="atemp-link">
						<StaticImage src="../images/folder.png" alt="Folder Icon"/><br/>
						<span>Archive</span>
					</Link>
				</Draggable>

				{/*Overlay*/}
				<div className="background-panel" style={{visibility: overlayVisibility}}>
					<p>{overlayText}</p>
				</div>
			</div>
		)
	}
}

export default Home
