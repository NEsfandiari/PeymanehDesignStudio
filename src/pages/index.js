import React, { Component } from 'react'
import {
  Intro,
  Sidebar,
  Studio,
  Services,
  Contact,
  Footer,
  EtsyStore,
} from '../components'
import '../css/main.css'
import Styled from 'styled-components'
import 'aos/dist/aos.css'

const Wrapper = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  /* font-family: 'Cormorant'; */
  font-family: 'EB Garamond';
  overflow-x: hidden;
`
const Inner = Styled.div`
  @media (min-width: 1280px){
    width: 75vw;
  }
`
class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Wrapper id="wrapper">
        <Sidebar />
        <Inner>
          <Intro />
          <Studio />
          <Services />
          <EtsyStore />
          <Contact />
          <Footer />
        </Inner>
      </Wrapper>
    )
  }
}

export default IndexPage
