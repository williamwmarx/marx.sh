import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header.js"

const Research = ({data}) => {
	return (
		<div>
			<Header {...data.site.siteMetadata}/>
			{
				data.allFile.edges.map((element, i) => {
					if (element.node.childMarkdownRemark != null) {
						return <div key={i}>{element.node.childMarkdownRemark.internal.content}</div>
					}
				})
			}
		</div>
	)
}

export const query = graphql`
	query ResearchQuery {
		site {
			siteMetadata {
				description
			}
		}
		allFile(filter: {sourceInstanceName: {eq: "research"}}) {
			edges {
				node {
					childMarkdownRemark {
						internal {
							content
						}
						frontmatter {
							title
							authornote
							link
							papertype
						}
					}
				}
			}
		}
	}
`

export default Research
