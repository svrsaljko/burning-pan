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
          id
          frontmatter {
            description
            title
            images {
              featuredImage_alt
              featuredImage {
                childImageSharp {
                  gatsbyImageData
                  id
                }
              }
            }
          }
        }
      }
    }
  }
`

// export const query = graphql`
//   query BurningPanData {
//     allMarkdownRemark(
//       filter: { fileAbsolutePath: { regex: "/(data/region)/" } }
//     ) {
//       cards: nodes {
//         card: frontmatter {
//           title
//           slug
//           featuredImage_alt
//           briefDescription
//           featuredImage {
//             childImageSharp {
//               gatsbyImageData
//             }
//           }
//         }
//       }
//     }
//   }
// `
