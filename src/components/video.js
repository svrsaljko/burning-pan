import React from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  height: 300px;
  margin-bottom: 3rem;
  @media (min-width: 480px) {
    height: 500px;
  }
`

// po potrebi maknit plugine vidit zasto neradi
const Video = () => (
  <Container>
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/a5rYbKqqO9g"
      title="Burning Pan - Show Cooking | Zadar"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowfullscreen
    ></iframe>
  </Container>
)
export default Video
