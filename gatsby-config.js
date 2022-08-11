module.exports = {
	siteMetadata: {
		title: `William W. Marx`,
		description: `William W. Marx is a conceptual bricoleur working between art, design and research.`,
		siteUrl: `https://marx.design`
	},
	plugins: [
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			}
		}
	]
}
