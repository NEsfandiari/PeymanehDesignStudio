import React, { Component } from 'react'
import Styled from 'styled-components'

const Container = Styled.section`
    text-align: center;
  p{
    margin-bottom: 0rem;
  }
  @media (max-width: 500px){
    flex-direction: column !important;
  }
`

const Image = Styled.img`
  width: 22rem;
  height: 25rem;
  @media (max-width: 1680px){
    width: 14.5rem;
    height: 16rem;
  }
  @media (max-width: 500px){
    width: 13rem;
    height: 14rem;
    margin-bottom: 1rem;
    margin-right: 0;
  }
  margin-right: 1.5rem;
  box-shadow: 0px 0px 12px 1px rgba(0,0,0,0.7);
`

class StudioSection extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Container style={{ display: 'flex', alignItems: 'center' }}>
        <div className="content" data-aos="fade-up" data-aos-delay="200">
          <div className="inner">
            <h2>{this.props.title}</h2>
            <p>{this.props.description}</p>
          </div>
        </div>
        <Image
          src={this.props.image}
          alt=""
          data-position="center center"
          data-aos="fade-left"
          data-aos-delay="400"
        />
      </Container>
    )
  }
}

export default StudioSection
