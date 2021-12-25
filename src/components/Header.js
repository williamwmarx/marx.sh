import React from "react"
import "../styles/header.css"

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {width: window.innerWidth};
	}

	// Update width state when window is resized
	updateWidth = (e) => {
		this.setState({ width: window.innerWidth });
	}

	componentDidMount() {
		window.addEventListener("resize", this.updateWidth);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.updateWidth);
	}

	render() {
		let title;
		if (this.state.width < 650) {
			title = <h1><span>WWM</span><span>MOBILE</span></h1>;
		} else if (this.state.width < 1101) {
			title = <h1>WWM WWM WWM</h1>;
		} else {
			title = <h1>MARX MARX MARX</h1>;
		}

		return (
			<header>
				<p id="desc">{this.props.description}</p>
				{title}
			</header>
		)
	}
}

export default Header
