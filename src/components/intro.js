import React, { Component } from 'react'
import Styled from 'styled-components'
import AOS from 'aos'
import * as Scroll from 'react-scroll'

const scroll = Scroll.scroller

const Video = Styled.iframe`
    position: relative;
    min-width: 93vw;
    min-height: 100vh;
    margin: 0;
    padding:0;
    opacity: .25;
    z-index: -1;
    @media (max-width: 736px){
      opacity: 0
    }
`
const Container = Styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  text-align: center;
  h1{
    font-style: italic;
  }

  h3 {
    font-size: 1.5rem;
    @media (max-width: 736px){
      font-size: 1rem
      width: 90%;
    }
  }
`

class Intro extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.aos = AOS
    this.aos.init()
    this.aos.refresh()
  }

  handleClick = () => {
    scroll.scrollTo('one', {
      duration: 1100,
      delay: 100,
      smooth: true,
    })
  }

  render() {
    return (
      <section id="intro" className="wrapper style1 fullscreen" data-aos="fade">
        <Video
          src=""
          frameborder="0"
          volume="0"
          autoplay="1"
          loop="1"
          allowfullscreen
        />
        <Container className="inner">
          <h1 data-aos="fade-down" data-aos-delay="400">
            Peymaneh's Design Studio
          </h1>
          <h3 data-aos="fade" data-aos-delay="700">
            Are you ready to show the world who you really are?
            <br />
            "Somewhere, something incredible is waiting to be known." -Carl
            Sagan
          </h3>
          <ul className="actions">
            <li>
              <a
                href="#one"
                className="button"
                data-aos="fade-up"
                data-aos-delay="800"
                onClick={this.handleClick}
              >
                Explore
              </a>
            </li>
          </ul>
        </Container>
      </section>
    )
  }
}

export default Intro
