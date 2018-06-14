import React, { Component } from 'react'

class Skill extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const icon = require(`react-icons/lib/fa/${this.props.icon}`)
    return (
      <section>
        <span className="icon major">{icon()}</span>
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
      </section>
    )
  }
}

export default Skill
