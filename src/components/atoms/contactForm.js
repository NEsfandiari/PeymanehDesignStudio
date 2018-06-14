import React, { Component } from 'react'

class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <section>
        <form method="post" action="#">
          <div className="field half first">
            <label for="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field half">
            <label for="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="field">
            <label for="message">Message</label>
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
