import React from "react"
import { Link } from "gatsby"
import "../styles/404.css"

const PageNotFound = () => {
	return (
		<div id="container">
			<div id="return-home-popup">
				<div id="title-bar">
					<p>404 Error: Page Not Found!</p>
					<div id="title-bar-controls">
						<button aria-label="Minimize"></button>
						<button aria-label="Maximize"></button>
						<button aria-label="Close"></button>
					</div>
				</div>
				<div id="window-body">
					<p>
						The page you are trying to visit does not exist. Please return home.
						<br/>
						Sorry for the inconvenience.
					</p>
					<section>
						<Link to="/">
							<button>GO HOME</button>
						</Link>
					</section>
							
				</div>
			</div>
		</div>
	)
}

export default PageNotFound
