import React from "react"
import styled from "styled-components"
import Images from "./images"
import About from "./about"
import Video from "./video"

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const Wrapper = styled.div`
  width: 100%;
  box-shadow: 0;
  display: grid;
  justify-content: center;
  @media (min-width: 480px) {
    margin: 0;
  }
`

const Body = ({ data }) => {
  const { about, images } = data
  return (
    <Container>
      <Wrapper>
        <Images images={images} />
      </Wrapper>
      <Video />
      <Wrapper>
        <About about={about} />
      </Wrapper>
    </Container>
  )
}

export default Body
