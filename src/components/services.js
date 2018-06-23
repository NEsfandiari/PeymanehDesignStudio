import React, { Component } from 'react'
import Styled from 'styled-components'
import Skill from './atoms/skill'

const Header = Styled.h1`
    margin-left: 25vw;
    @media(max-width: 600px) {
        margin-left: 16vw
    }
    @media(min-width: 1280px) {
        margin-left: 20vw
    }
`

class Services extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    let skills = []
    skills = this.props.services.map((service, i) => (
      <Skill
        title={service.title}
        description={service.description}
        icon={service.icon}
        key={i}
      />
    ))
    return (
      <section
        id="two"
        className="wrapper style3 "
        data-aos="fade"
        data-aos-delay="400"
      >
        <div className="inner">
          <Header data-aos="zoom-in" data-aos-delay="200">
            Design Services
          </Header>
          <h2 data-aos="zoom-in" data-aos-delay="200">
            What I Can Do
          </h2>
          <p data-aos="zoom-in" data-aos-delay="100">
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
