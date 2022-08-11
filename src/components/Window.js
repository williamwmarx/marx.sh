import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import "../styles/window.css"

export default function Windows() {
	return (
		<div className="window">
			<div className="title-bar">
				<div className="title-bar-text">“Curated Vacancy” Art Store</div>
				<div className="title-bar-controls">
					<button aria-label="Minimize" />
					<button aria-label="Maximize" />
					<button aria-label="Close" />
				</div>
			</div>

			<div className="window-body">
				<StaticImage src="../images/curated_vacancy.jpg" alt="“Curated Vacancy” Art Store"/>
			</div>
		</div>
	)
}
