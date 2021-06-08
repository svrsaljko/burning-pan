import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { v4 as uuidv4 } from "uuid"

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const Wrapper = styled.div`
  display: flex;
  // width: 200px;
  height: 300px;
  margin-bottom: 3rem;

  @media (min-width: 480px) {
    height: 500px;
  }
`

const Images = ({ images }) => {
  return (
    <Container>
      {images.map(({ featuredImage, featuredImage_alt }) => {
        const image = getImage(featuredImage)
        return (
          <Wrapper key={uuidv4()}>
            <GatsbyImage
              loading="eager"
              image={image}
              alt={featuredImage_alt}
            />
          </Wrapper>
        )
      })}
    </Container>
  )
}

export default Images
