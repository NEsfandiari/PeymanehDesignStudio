import React from 'react'
import Link from 'gatsby-link'
import {
  Intro,
  Sidebar,
  Studio,
  Services,
  Contact,
  Footer,
} from '../components'
import '../css/main.css'
import Styled from 'styled-components'

const Wrapper = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
`
const Inner = Styled.div`
  @media (min-width: 1300px){
    width: 75vw;
  }
`

const IndexPage = () => (
  <Wrapper id="wrapper">
    <Sidebar />
    <Inner>
      <Intro />
      <Studio />
      <Services />
      <Contact />
      <Footer />
    </Inner>
  </Wrapper>
)

export default IndexPage
