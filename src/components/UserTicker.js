import React from "react"
import shuffle from "./shuffle.js"
import "../styles/ticker.css"

class UserTicker extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			ip: null,
			loc: null,
			city: null,
			state: null,
			country: null,
			lat: null,
			lng: null,
			zip: null,
			org: null,
			type: null,
			weather: null,
			ua: null,
			time: `${Date().toString().replace("(", "").replace(")", "")}`.toUpperCase(),
		};
	}

	fetchWeather = (latitude, longitude) => {
		fetch(`https://api.weather.gov/points/${latitude},${longitude}`)
			.then(res => res.json())
				.then(obj => {
					if (obj.hasOwnProperty("properties") && obj.properties.hasOwnProperty("forecast")) {
						fetch(obj.properties.forecast)
							.then(res2 => res2.json())
							.then(obj2 => {
								let forecast = obj2.properties.periods[0].detailedForecast
								if (forecast[forecast.length - 1] === ".") {
									forecast = forecast.slice(0, -1)
								}
								this.setState({
									weather: forecast
								})
							})
					}
				})
	}

	fetchLocation = (ipAddress) => {
		fetch("https://api.ipgeolocation.io/ipgeo?apiKey=733f5090fc794df4a9914e7cd04ac243")
			.then(res => res.json())
			.then(obj => {
				this.setState({
					city: obj.hasOwnProperty("city") ? obj.city : null,
					state: obj.hasOwnProperty("state_prov") ? obj.state_prov : null,
					county: obj.hasOwnProperty("country_code3") ? obj.country_code3 : null,
					lat: obj.hasOwnProperty("latitude") ? obj.latitude : null,
					lng: obj.hasOwnProperty("longitude") ? obj.longitude : null,
					zip: obj.hasOwnProperty("zipcode") ? obj.zipcode : null,
					type: obj.hasOwnProperty("connection_type") ? obj.connection_type : null,
					org: obj.hasOwnProperty("organization") ? obj.organization : null,
				})
				if (obj.hasOwnProperty("latitude") && obj.hasOwnProperty("longitude")) {
					this.fetchWeather(obj.latitude, obj.longitude);
				}
			})
		
	}

	fetchIP = () => {
		fetch("https://ipecho.net/plain")
			.then(res => res.text())
			.then(ipAddress => {
				this.setState({ ip: ipAddress });
				this.fetchLocation(ipAddress)
			})
	}

	componentDidMount() {
		this.setState({ ua: `${navigator.userAgent}`.toUpperCase() });
		this.fetchIP();
	}

	render() {
		// Store user elements
		const userElements = [
			{
				emoji: "🕰",
				content: this.state.time
			},
			{
				emoji: "🪞",
				content: this.state.ua
			}
		]

		// Add IP if we have it
		if (this.state.ip != null) {
			userElements.push({"emoji": "🛰", "content": this.state.ip})
		}

		// Format location
		let loc = [this.state.city, this.state.state, this.state.country]
		if (this.state.zip != null) {
			loc.push(`[${this.state.zip}]`)
		}
		loc = loc.filter(s => s)
		if (loc.length > 0) {
			userElements.push({"emoji": "📍", "content": loc.join(", ")})
		}

		// Latitude and longitude
		let latlong = [this.state.lat, this.state.lng]
		if (latlong.filter(s => s).length > 0) {
			userElements.push({"emoji": "🗺", "content": latlong.join(", ").toUpperCase()})
		}

		// Means of connection
		let connection = [this.state.type, this.state.org]
		if (connection.filter(s => s).length > 0) {
			userElements.push({"emoji": "🔌", "content": connection.join(" C/O ").toUpperCase()})
		}

		// Weather conditions
		if (this.state.weather != null) {
			userElements.push({"emoji": "🌦", "content": this.state.weather.toUpperCase()})
		}

		// Random animation time
		let time = 2 * Math.floor((60 + Math.random() * 30) / 2)
		const animation1 = {
			animation: `marquee ${time}s linear infinite`,
			animationDelay: `-${time}s`
		}
		const animation2 = {
			animation: `marquee2 ${time}s linear infinite`,
			animationDelay: `-${time / 2}s`
		}

		const ticker = (
			<div>
				{
					shuffle(userElements).map((obj, i) => (
						<span>
							<span className="ticker-text" key={i}>
								<span className="emoji">{obj.emoji}&nbsp;</span>
								<span>{obj.content}</span>
							</span>
							<span className="ticker-text">>>></span>
						</span>
					))
				}
			</div>
		);

		return (
			<div className="ticker-wrapper">
				<div className="ticker user">
					<div style={animation1}>{ticker}</div>
					<div style={animation2}>{ticker}</div>
				</div>
			</div>
		)
	}
}

export default UserTicker
