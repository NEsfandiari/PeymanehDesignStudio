import React, { Component } from 'react'
import Styled from 'styled-components'
import Skill from './atoms/skill'

const Container = Styled.div`
`

class Services extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    let skills = []
    skills = this.props.services.map(service => (
      <Skill
        title={service.title}
        description={service.description}
        icon={service.icon}
      />
    ))
    return (
      <section id="two" className="wrapper style3 fade-up">
        <div className="inner">
          <h1>Peymaneh's Design Consulting</h1>
          <h2>What I Can Do</h2>
          <p>
            Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam
            turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus,
            lacus eget hendrerit bibendum, urna est aliquam sem, sit amet
            imperdiet est velit quis lorem.
          </p>
          <div className="features">{skills}</div>
          <ul className="actions">
            <li>
              <a href="#" className="button">
                Learn more
              </a>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Services

Services.defaultProps = {
  services: [
    {
      title: 'Jewelery',
      description:
        'Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.',
      icon: 'diamond',
    },
    {
      title: 'Upholstrey',
      description:
        'Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.',
      icon: 'star',
    },
    {
      title: 'Tailoring',
      description:
        'Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.',
      icon: 'cut',
    },
    {
      title: 'Fabric Design',
      description:
        'Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.',
      icon: 'object-group',
    },
    {
      title: 'Gown Alterations',
      description:
        'Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.',
      icon: 'female',
    },
    {
      title: 'Acessory Design',
      description:
        'Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.',
      icon: 'gift',
    },
  ],
}
