import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Container = styled.div`
  display: grid;
  justify-content: center;
`

const Wrapper = styled.div`
  width: 180px;
  height: 130px;
  margin-top: -3rem;
  margin-bottom: 7rem;
  @media (min-width: 480px) {
    width: 200px;
    height: 200px;
  }
`

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <StaticImage
          src="../images/burning-pan.jpeg"
          alt="Burning pan title image"
          quality={100}
          loading="eager"
          layout="constrained"
        />
      </Wrapper>
    </Container>
  )
}

export default Header
