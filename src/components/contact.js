import React, { Component } from 'react'

import ContactForm from './atoms/contactForm'
import ContactInfo from './atoms/contactInfo'

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <section id="four" className="wrapper style1 fade-up" data-aos="fade">
        <div className="inner">
          <h2>Let's Chat!</h2>
          <p>“Inside you there’s an artist you don’t know about.” -Rumi</p>
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
