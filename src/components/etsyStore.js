import React, { Component } from 'react'
import axios from 'axios'
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

  async componentDidMount() {
    try {
      let data = await axios.get(
        'https://openapi.etsy.com/v2/shops/PeymanehDesigns/listings/active.js?api_key=ezs05dfqp9n6hcv0bef9us2r&includes=MainImage&fields=url,price,title,shop_section_id,description&limit=100',
        { headers: { AccessControlAllowOrigin: '*' } }
      )
      console.log(data)
    } catch (e) {
      console.log(e)
    }
  }

  render() {
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
          <Products>
            <ItemCard
              tabindex="0"
              delay="200"
              text="Amethyst Silk Knotted Pendant"
              image="https://i.etsystatic.com/15407709/r/il/ab0084/1262097654/il_570xN.1262097654_222x.jpg"
            />
            <ItemCard
              tabindex="1"
              delay="400"
              text="Rose Quartz Pink Sapphire Chandelier Earrings"
              image="https://img0.etsystatic.com/204/0/15407709/il_fullxfull.1262095566_dgnf.jpg"
            />
            <ItemCard
              tabindex="2"
              delay="600"
              text="Antique French Button Bracelet"
              image="https://img1.etsystatic.com/216/0/15407709/il_fullxfull.1307689271_9mey.jpg"
            />
            <ItemCard
              tabindex="3"
              delay="200"
              text="Amethyst Swarovski Crystal Chandelier Earrings"
              image="https://img0.etsystatic.com/201/0/15407709/il_fullxfull.1250286920_7gx0.jpg"
            />
            <ItemCard
              tabindex="4"
              delay="400"
              text="Aqua Quartz Dangle Earrings"
              image="https://img0.etsystatic.com/219/1/15407709/il_fullxfull.1260914076_hgbp.jpg"
            />
            <ItemCard
              tabindex="5"
              delay="600"
              text="Ruby Aztec Style Dangle Earrings"
              image="https://img1.etsystatic.com/182/1/15407709/il_fullxfull.1307653923_cbhh.jpg"
            />
          </Products>
        </div>
      </section>
    )
  }
}

export default EtsyStore
