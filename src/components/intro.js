import React, { Component } from 'react'
import Styled from 'styled-components'

const Video = Styled.iframe`
    position: relative;
    min-width: 75vw;
    min-height: 80vh;
    margin: 0;
    padding:0;
    opacity: .8;
`

class Intro extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <section id="intro" className="wrapper style1 fullscreen fade-up">
        {/* <Video
          src="https://www.youtube.com/embed/rhGSXj28Gu0"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        /> */}
        <div className="inner">
          <h1>Peymaneh's Design Studio</h1>
          <p>
            Just another fine responsive site template designed by{' '}
            <a href="http://html5up.net">HTML5 UP</a>
            <br />
            and released for free under the{' '}
            <a href="http://html5up.net/license">Creative Commons</a>.
          </p>
          <ul className="actions">
            <li>
              <a href="#one" className="button scrolly">
                Learn more
              </a>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Intro
