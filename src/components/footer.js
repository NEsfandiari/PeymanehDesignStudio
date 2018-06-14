import React, { Component } from 'react'

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <footer id="footer" className="wrapper style1-alt">
        <div className="inner">
          <ul className="menu">
            <li>&copy; Untitled. All rights reserved.</li>
            <li>
              Created By:{' '}
              <a href="https://nikiesfandiari-portfolio.herokuapp.com/">
                Niki Esfandiari
              </a>
            </li>
          </ul>
        </div>
      </footer>
    )
  }
}

export default Footer
