import * as React from 'react'
import { Link } from "gatsby"
import "../styles/header.css"

function studioTime() {
	var dateString = new Date().toLocaleString('en-US', {hour12: false, timeZone: 'America/New_York'}).split(" ")[1]
	return (dateString.length === 8) ? dateString : "0" + dateString
}

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {time: studioTime()};
	}

	componentDidMount() {
		this.timer = setInterval(() => this.setState({time: studioTime()}), 1000);
	}

	componentWillUnmount(){
		clearInterval(this.timer);
	}

	render() {
		return (
			<header>
				<p>
					<Link to="/">William W. Marx</Link> is a conceptual bricoleur working between art, design and research.
				</p>
				<hr/>
				<p>
					(DIGITAL) <Link to="https://instagram.com/williamwmarx">@williamwmarx</Link> —&nbsp;
					<Link to="mailto:something@marx.design">something@marx.design</Link> |
					(PHYSICAL) <span className="serif">{this.state.time}</span> <span className="serif">[New York, NY (U.S.A.)]</span>
				</p>
			</header>
		)
	}
}

export default Header
