import React, { Component } from 'react'
import Styled from 'styled-components'
import DirectionReveal from 'direction-reveal'
import 'direction-reveal/styles/direction-reveal.scss'

const Card = Styled.div`
  border-radius: 30px 30px 30px 30px;
  a{
    text-decoration: none;
    height: 95%;
    border-bottom: 0;
  };
  div{border-radius: 30px 30px 30px 30px;}
  img {
    width: 20rem;
    height: 23rem;
    @media (max-width: 1680px){
      width: 18rem;
      height: 21rem;
    }
    @media (max-width: 500px){
      width: 12rem;
      height: 14rem;
    }
    border-radius: 30px 30px 30px 30px;
  }
`

class ItemCard extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    DirectionReveal({
      selector: '.direction-reveal', // Container element selector.
      itemSelector: '.direction-reveal__card', // Item element selector.
      animationName: 'swing', // Animation CSS class.
      enableTouch: true, // Adds touch event to show content on first click then follow link on the second click.
      touchThreshold: 250, // Touch length must be less than this to trigger reveal which prevents the event triggering if user is scrolling.
    })
  }
  render() {
    return (
      <Card
        className="direction-reveal"
        tabindex={this.props.tabindex}
        data-aos="zoom-in-right"
        data-aos-delay={this.props.delay}
      >
        <a
          className="direction-reveal__card"
          href="https://www.etsy.com/listing/534813468/amethyst-silk-knotted-pendant?utm_source=peymaneh39sdesignstu&utm_medium=api&utm_campaign=api"
        >
          <div className="direction-reveal__overlay direction-reveal__anim--in">
            <h2 className=".direction-reveal__text">{this.props.text}</h2>
          </div>
          <img src={this.props.image} />
        </a>
      </Card>
    )
  }
}

export default ItemCard
