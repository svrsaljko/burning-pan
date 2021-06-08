import React from "react"
import Layout from "../components/layout"
import Body from "../components/body"
import { graphql } from "gatsby"

export default function Index({ data }) {
  const { burningPan } = data.allMarkdownRemark.edges[0]
  return (
    <Layout>
      <Body data={burningPan.frontmatter} />
    </Layout>
  )
}

export const query = graphql`
  query BurningPanQuery {
    allMarkdownRemark {
      edges {
        burningPan: node {
          frontmatter {
            description
            title
            images {
              featuredImage_alt
              featuredImage {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  }
`
