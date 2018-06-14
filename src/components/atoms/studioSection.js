import React, { Component } from 'react'

class StudioSection extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <section>
        <div className="content">
          <div className="inner">
            <h3>{this.props.title}</h3>
            <p>{this.props.description}</p>
            <ul className="actions">
              <li>
                <a href="#" className="button">
                  Learn more
                </a>
              </li>
            </ul>
          </div>
        </div>
        <a href="#" className="image">
          <img
            src={this.props.image}
            alt=""
            data-position="center center"
            style={{ width: '23rem', height: '24.5rem', paddingTop: '.1rem' }}
          />
        </a>
      </section>
    )
  }
}

export default StudioSection
