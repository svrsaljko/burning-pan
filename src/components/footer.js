import React from "react"
import styled from "styled-components"
import SocialMedia from "./socialMedia"

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const Text = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  margin-top: 2rem;
`

const Footer = () => {
  return (
    <Container>
      <SocialMedia />
      <Text>Burning pan © 2021 All Rights Reserved</Text>
    </Container>
  )
}

export default Footer
