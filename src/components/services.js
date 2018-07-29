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
            With over 30+ years experience in Fashion and Interior Design, you
            cultivate an outfit or look that finally reaches the extent of your
            imagination. Skip the cut and paste service you'll get from stores
            and take anything from your own closet or living room into a
            showcase of your best self!
          </p>
          <div className="features">{skills}</div>
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
        'Why not transform Grandma’s brooch into a modern piece or add crystals or stones to an old piece of jewelry you no longer wear?',
      icon: 'diamond',
    },
    {
      title: 'Upholstrey',
      description:
        "Let's revamp that wingback chair or antique couch you bought at the local yard sale. I'll take any a piece of furniture to best reflect your sense of style and interior design.",
      icon: 'star',
    },
    {
      title: 'Tailoring',
      description:
        'Transform your wardrobe by combining pieces in innovative and creative ways that showcase who you are!',
      icon: 'cut',
    },
    {
      title: 'Fabric Design',
      description:
        "Using jacquard dyes and a water soluble resist, we'll create a sample piece that you can then use to create any garment or scarf of your liking (silk or cotton).",
      icon: 'object-group',
    },
    {
      title: 'Gown Alterations',
      description:
        'Don’t settle for an ill-fitting gown. Feel perfect in the perfect fit for you! Look as fabulous as you want for your wedding day or special occasion!',
      icon: 'female',
    },
    {
      title: 'Acessory Design',
      description:
        "Got a unqiue vision for something truly original? For 30+ years I have been making custom one-of-kind pieces. Let's create something truly spectacular!",
      icon: 'gift',
    },
  ],
}
