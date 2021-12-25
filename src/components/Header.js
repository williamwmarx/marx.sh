import React from "react"
import UserTicker from "./UserTicker.js"
import "../styles/header.css"

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {width: 1000};
	}

	// Update width state when window is resized
	updateWidth = (e) => {
		this.setState({ width: window.innerWidth });
	}

	componentDidMount() {
		this.setState({ width: window.innerWidth });
		window.addEventListener("resize", this.updateWidth);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.updateWidth);
	}

	render() {
		if (this.state.width < 650) {
			return (
				<header>
					<div>
						<hr/>
						<UserTicker/>
						<hr/>
					</div>
					<h1>“BETTER ON DESKTOP”</h1>
					<hr id="underline"/>
					<p id="desc">{this.props.description}</p>
				</header>
			)
		} else if (this.state.width < 1101) {
			return (
				<header>
					<p id="desc">{this.props.description}</p>
					<h1>WWM WWM WWM</h1>
				</header>
			)
		} else {
			return (
				<header>
					<p id="desc">{this.props.description}</p>
					<h1>MARX MARX MARX</h1>
				</header>
			)
		}
	}
}

export default Header
