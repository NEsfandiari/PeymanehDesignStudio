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
  font-family: 'EB Garamond';
  overflow-x: hidden;
  img{
    border-radius: 5px;
  }
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
      <div>
        <link
          href="https://fonts.googleapis.com/css?family=EB+Garamond"
          rel="stylesheet"
        />
        <Wrapper id="wrapper">
          <Sidebar />
          <Inner>
            <Intro />
            <Studio />
            <Services />
            <EtsyStore data={this.props.data} />
            <Contact />
            <Footer />
          </Inner>
        </Wrapper>
      </div>
    )
  }
}

export default IndexPage

export const query = graphql`
  query EtsyItemQuery {
    allEtsyItem {
      edges {
        node {
          title
          url
          image
        }
      }
    }
  }
`
