import React, { Component } from 'react'
import {
  FaShoppingBag,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/lib/fa'
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
            <span>
              37 Amigo Lane<br />
              Walnut Creek, CA 94596<br />
              USA
            </span>
          </li>
          <li>
            <h3>Email</h3>
            <a href="#">peymie@aol.com</a>
          </li>
          <li>
            <h3>Phone</h3>
            <span>(925) 286-2521</span>
          </li>
          <li>
            <h3>Social</h3>
            <ul className="icons">
              <li>
                <FaShoppingBag>
                  <span className="label">ShoppFaShoppingBag</span>
                </FaShoppingBag>
              </li>
              <li>
                <FaFacebook>
                  <span className="label">Facebook</span>
                </FaFacebook>
              </li>
              <li>
                <FaInstagram>
                  <span className="label">Instagram</span>
                </FaInstagram>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    )
  }
}

export default ContactInfo
