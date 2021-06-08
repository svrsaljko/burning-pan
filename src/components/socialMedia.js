import React from "react"
import styled from "styled-components"
import { IoLogoYoutube } from "react-icons/io"
import { IoLogoInstagram } from "react-icons/io"
import { IoLogoLinkedin } from "react-icons/io"

// grid umisto flexbox-a
const Container = styled.div`
  //border: 3px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-left: 6rem;
  margin-right: 6rem;
`

const Wrapper = styled.a`
  font-size: 3rem;
  color: ${({ color }) => color};
`

const SocialMedia = () => {
  return (
    <Container>
      <Wrapper
        color={"#FF0000"}
        href="https://www.youtube.com/channel/UCqKLXnAkOyv337CB6rOBavg"
      >
        <IoLogoYoutube />
      </Wrapper>
      <Wrapper color={"#e95950"} href="https://www.instagram.com/ahzaton/">
        <IoLogoInstagram />
      </Wrapper>
      <Wrapper
        color={"#0072b1"}
        href="https://www.linkedin.com/in/domagoj-cirjak-65763720b/"
      >
        <IoLogoLinkedin />
      </Wrapper>
    </Container>
  )
}

export default SocialMedia
