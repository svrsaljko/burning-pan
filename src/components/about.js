import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const Wrapper = styled.div`
  font-size: 2rem;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  color: #7a7a7a;
  @media (min-width: 480px) {
    margin: 0;
  }
`

const About = ({ about }) => {
  return (
    <Container>
      {about.map(paragraph => (
        <Wrapper> {paragraph} </Wrapper>
      ))}
    </Container>
  )
}

export default About
