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
          src="https://www.youtube.com/embed/rhGSXj28Gu0?start=26&autoplay=1"
          frameborder="0"
          volume="0"
          loop="1"
          allowfullscreen
        />
        <Container className="inner">
          <h1
            data-aos="fade-down"
            data-aos-delay="400"
            style={{ fontStyle: 'italic' }}
          >
            Peymaneh's Design Studio
          </h1>
          <h3
            data-aos="fade"
            data-aos-delay="700"
            style={{ fontSize: '1.5rem' }}
          >
            Just another fine responsive site template designed by Niki
            Esfandiari
            <br />
            and released for free under the Rithm Patent Law
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
                Learn more
              </a>
            </li>
          </ul>
        </Container>
      </section>
    )
  }
}

export default Intro
