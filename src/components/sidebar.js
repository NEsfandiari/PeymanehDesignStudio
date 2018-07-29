import React, { Component } from 'react'
import Styled from 'styled-components'
import * as Scroll from 'react-scroll'

const scroll = Scroll.scroller

const Image = Styled.img`
  @media (min-width: 1900px){
    width: 21.1rem;
  }
  @media (max-width: 1280px){
    display: none;
  }
  height: 6rem;
  width: 18vw;
  box-shadow: 0px 0px 19px 2px rgba(0,0,0,0.7);
`

class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: ['active', 'inactive', 'inactive', 'inactive', 'inactive'],
    }
  }

  componentDidMount() {
    if (typeof window !== `undefined`) {
      window.addEventListener('scroll', this.handleScroll)
    }
  }

  handleScroll = () => {
    if (typeof window !== 'undefined') {
      let position = window.scrollY
      let one = document.getElementById('one').offsetTop
      let two = document.getElementById('two').offsetTop
      let three = document.getElementById('three').offsetTop
      let four = document.getElementById('four').offsetTop
      if (position > four - 300) {
        this.setState({
          status: ['inactive', 'inactive', 'inactive', 'inactive', 'active'],
        })
      } else if (position > three - 300) {
        this.setState({
          status: ['inactive', 'inactive', 'inactive', 'active', 'inactive'],
        })
      } else if (position > two - 300) {
        this.setState({
          status: ['inactive', 'inactive', 'active', 'inactive', 'inactive'],
        })
      } else if (position > one - 300) {
        this.setState({
          status: ['inactive', 'active', 'inactive', 'inactive', 'inactive'],
        })
      } else {
        this.setState({
          status: ['active', 'inactive', 'inactive', 'inactive', 'inactive'],
        })
      }
    }
  }

  handleClick = e => {
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
          <Image
            src="https://img.etsystatic.com/isbl/eef4fc/27215801/isbl_1680x420.27215801_tqexey2e.jpg?version=0"
            data-aos="fade"
            data-aos-delay="1000"
          />
          <nav data-aos="fade-right">
            <ul>
              <li onClick={this.handleClick}>
                <a name="intro" data-i={0} className={this.state.status[0]}>
                  Welcome
                </a>
              </li>
              <li onClick={this.handleClick}>
                <a name="one" data-i={1} className={this.state.status[1]}>
                  Fashion Design Courses
                </a>
              </li>
              <li onClick={this.handleClick}>
                <a name="two" data-i={2} className={this.state.status[2]}>
                  Design Services
                </a>
              </li>
              <li onClick={this.handleClick}>
                <a name="three" data-i={3} className={this.state.status[3]}>
                  Store
                </a>
              </li>
              <li onClick={this.handleClick}>
                <a name="four" data-i={4} className={this.state.status[4]}>
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
