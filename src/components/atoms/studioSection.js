import React, { Component } from 'react'
import Styled from 'styled-components'

const Image = Styled.img`
  width: 22rem;
  height: 25rem;
  @media (max-width: 1680px){
    width: 14.5rem;
    height: 16rem;
  }
  @media (max-width: 500px){
    width: 9rem;
    height: 10rem;
  }
  margin-right: 1.5rem;
  border-radius: 30px 30px 30px 30px;
  box-shadow: 0px 0px 20px 1px rgba(0,0,0,0.7);
`

class StudioSection extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <section style={{ display: 'flex', alignItems: 'center' }}>
        <div className="content" data-aos="fade-up" data-aos-delay="200">
          <div className="inner">
            <h2>{this.props.title}</h2>
            <p>{this.props.description}</p>
            <ul className="actions">
              <li>
                <a href="#" className="button">
                  Learn more
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Image
          src={this.props.image}
          alt=""
          data-position="center center"
          data-aos="fade-left"
          data-aos-delay="400"
        />
      </section>
    )
  }
}

export default StudioSection
