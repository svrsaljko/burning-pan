import React from "react"
import styled from "styled-components"
import Images from "./images"

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  margin-top: 7rem;
  @media (min-width: 480px) {
    margin: 0;
  }
`

const Body = ({ data }) => {
  const { description, images } = data
  return (
    <Container>
      <Wrapper>
        <Images images={images} />
      </Wrapper>
    </Container>
  )
}

export default Body
