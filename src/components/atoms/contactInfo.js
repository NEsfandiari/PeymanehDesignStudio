import React, { Component } from 'react'
import { FaShoppingBag, FaFacebook, FaInstagram } from 'react-icons/lib/fa'
import AOS from 'aos'

class ContactInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <section data-aos="fade-left" data-aos-delay="200">
        <ul className="contact">
          <li>
            <h3>Address</h3>
            <span>Walnut Creek, CA</span>
          </li>
          <li>
            <h3>Email</h3>
            <a href="mailto:peymie@aol.com">peymie@aol.com</a>
          </li>
          <li>
            <h3>Phone</h3>
            <span>(925) 202-8636</span>
          </li>
          <li>
            <h3>Social</h3>
            <ul className="icons">
              <li>
                <a
                  href="https://www.etsy.com/shop/PeymanehDesigns?ref=seller-platform-mcnav"
                  target="_blank"
                >
                  <FaShoppingBag>
                    <span className="label">ShoppFaShoppingBag</span>
                  </FaShoppingBag>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/peymaneh.esfandiari.1"
                  target="_blank"
                >
                  <FaFacebook>
                    <span className="label">Facebook</span>
                  </FaFacebook>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/peymiebg/" target="_blank">
                  <FaInstagram>
                    <span className="label">Instagram</span>
                  </FaInstagram>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    )
  }
}

export default ContactInfo
