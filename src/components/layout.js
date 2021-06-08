import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import styled, { ThemeProvider } from "styled-components"
import "../css/index.css"

const Container = styled.div`
  margin: 0;
  @media (min-width: 480px) {
    display: flex;
    flex-direction: column;
    margin-right: 27rem;
    margin-left: 27rem;
    margin-top: 0;
  }
`

const Layout = ({ children }) => {
  return (
    <Container>
      <Header /> {children} <Footer />
    </Container>
  )
}

export default Layout
