import React, { Component } from 'react'
import Styled from 'styled-components'
import ItemCard from './atoms/itemCard'

const Header = Styled.h1`
    margin-left: 21vw;
    @media(min-width: 1280px) {
        margin-left: 18vw
    }
`
const Products = Styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

class EtsyStore extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {}

  render() {
    let items
    let delay = 0
    const itemsQl = this.props.data.allEtsyItem.edges

    items = itemsQl.map((item, i) => {
      delay = delay + 200
      return (
        <ItemCard
          key={i}
          delay={delay}
          tabindex={i}
          text={item.node.title}
          image={item.node.image}
          url={item.node.url}
        />
      )
    })
    return (
      <section
        id="three"
        className="wrapper"
        data-aos="fade"
        style={{ backgroundColor: '#201046' }}
      >
        <div className="inner">
          <Header>Peymaneh's Designs</Header>
          <p data-aos="zoom-in" data-aos-delay="100">
            Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam
            turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus,
            lacus eget hendrerit bibendum, urna est aliquam sem, sit amet
            imperdiet est velit quis lorem.
          </p>
          <Products>{items}</Products>
        </div>
      </section>
    )
  }
}

export default EtsyStore
