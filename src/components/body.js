import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import graphql from "gatsby"

const Body = () => {
  return <div></div>
}

// export const query = graphql`
//   query RegionPageData {
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

export default Body
