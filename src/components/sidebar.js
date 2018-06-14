import React, { Component } from 'react'
import Styled from 'styled-components'
import * as Scroll from 'react-scroll'

var scroll = Scroll.scroller

const Container = Styled.div`
  
`

class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: ['active', 'inactive', 'inactive', 'inactive'],
    }
  }

  handleClick = e => {
    let i = e.target.dataset.i
    this.setState({ status: ['inactive', 'inactive', 'inactive', 'inactive'] })
    this.setState(prev => {
      return (prev.status[i] = 'active')
    })
    scroll.scrollTo(e.target.name, {
      duration: 1500,
      delay: 100,
      smooth: true,
    })
  }

  render() {
    return (
      <section id="sidebar">
        <div className="inner">
          <nav>
            <ul>
              <li onClick={this.handleClick}>
                <a name="intro" data-i={0} className={this.state.status[0]}>
                  Welcome
                </a>
              </li>
              <li onClick={this.handleClick}>
                <a name="one" data-i={1} className={this.state.status[1]}>
                  Design Studio
                </a>
              </li>
              <li onClick={this.handleClick}>
                <a name="two" data-i={2} className={this.state.status[2]}>
                  Services
                </a>
              </li>
              <li onClick={this.handleClick}>
                <a name="three" data-i={3} className={this.state.status[3]}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    )
  }
}

export default Sidebar
