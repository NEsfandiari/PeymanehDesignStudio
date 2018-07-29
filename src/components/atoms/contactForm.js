import React, { Component } from 'react'

class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
    }
  }

  handleChange = e => {
    console.log('hey')
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onSubmit = e => {
    e.preventDefault()
    window.open(
      `mailto:peymie@aol.com?subject=${"Peymaneh's Design Studio Website Contact -" +
        this.state.name}&body=${this.state.message}`
    )
    this.setState({ name: '', email: '', message: '' })
  }

  render() {
    return (
      <section data-aos="fade-right" data-aos-delay="200">
        <form method="post" action="#">
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              onChange={this.handleChange}
              value={this.state.message}
            />
          </div>
          <ul className="actions">
            <li>
              <a className="button submit" onClick={this.onSubmit}>
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
