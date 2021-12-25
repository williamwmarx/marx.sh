import React from "react"
import { graphql } from "gatsby"
import Header from "../components/Header.js"

const Research = ({data}) => {
	return (
		<div>
			<Header/>
		</div>
	)
}

export const query = graphql`
	query ResearchQuery {
		allFile(filter: {sourceInstanceName: {eq: "research"}}) {
			edges {
				node {
					childMarkdownRemark {
						html
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
