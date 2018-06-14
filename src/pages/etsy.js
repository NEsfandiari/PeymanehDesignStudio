import React, { Component } from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
import axios from 'axios'

class etsy extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  async componentDidMount() {
    let data = await axios.get(
      'https://openapi.etsy.com/v2/shops/PeymanehDesigns/listings/active.js?api_key=ezs05dfqp9n6hcv0bef9us2r&includes=MainImage&fields=url,price,title,shop_section_id,description&limit=100'
    )
    console.log(data)
  }
  render() {
    return (
      <div>
        <Header />
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
      </div>
    )
  }
}

export default etsy
