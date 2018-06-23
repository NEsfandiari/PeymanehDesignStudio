import React, { Component } from 'react'

class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  onSubmit() {}

  render() {
    return (
      <section data-aos="fade-right" data-aos-delay="200">
        <form method="post" action="#" onSubmit={this.onSubmit}>
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="5" />
          </div>
          <ul className="actions">
            <li>
              <a href="" className="button submit">
                Send Message
              </a>
            </li>
          </ul>
        </form>
      </section>
    )
  }
}

export default ContactForm
