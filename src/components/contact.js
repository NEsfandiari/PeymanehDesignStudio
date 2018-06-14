import React, { Component } from 'react'
import Styled from 'styled-components'

import ContactForm from './atoms/contactForm'
import ContactInfo from './atoms/contactInfo'

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <section id="three" className="wrapper style1 fade-up">
        <div className="inner">
          <h2>Let's Chat!</h2>
          <p>
            Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam
            turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus,
            lacus eget hendrerit bibendum, urna est aliquam sem, sit amet
            imperdiet est velit quis lorem.
          </p>
          <div className="split style1">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
    )
  }
}

export default Contact
