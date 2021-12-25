module.exports = {
	siteMetadata: {
		title: `William W. Marx | ART + RESEARCH + DESIGN`,
		description: `Born in Houston, TX (U.S.A.) at the turn of the millennium, William W. Marx is an artist, researcher, and designer. Rather than viewing these as three distinct disciplines, he sees an underlying coalescence of research driven by design and design driven by research with the energy and intention of art extant throughout. It was through studying the likes of those from John Rawls to Marcel Duchamp, that of those from Paul Erdős to Virgil Abloh, that Marx first realized the power of conscientious design and collaboration. These tenets, driven by a guiding principle of eternal optimism, form the core of Marx’s praxis, unifying everything from experimental research methodology to type design.`,
		siteUrl: `https://marx.design`
	},
	plugins: [
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `icons`,
				path: `${__dirname}/src/images/icons`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `research`,
				path: `${__dirname}/src/research`,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			optoins: {
				plugins: []
			}
		}
	],
}
