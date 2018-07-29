import React, { Component } from 'react'
import Styled from 'styled-components'
import StudioSection from './atoms/studioSection'

const Header = Styled.h1`
    margin-bottom: 0;
    @media(max-width: 600px) {
    }
    @media(min-width: 1280px) {
    }
`
const Container = Styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content: space-around;
    a{
      width: 30vw
      min-width: 10rem;
    }
`

class Studio extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    let sections = []
    sections = this.props.sections.map((section, i) => (
      <StudioSection
        title={section.title}
        description={section.description}
        image={section.image}
        key={i}
      />
    ))
    return (
      <section
        id="one"
        className="wrapper style2 spotlights"
        data-aos="fade"
        data-aos-delay="300"
      >
        <Container
          className="inner"
          style={{ paddingBottom: '10', paddingTop: '10' }}
        >
          <Header>Fashion Design Courses</Header>
          <ul className="actions">
            <li>
              <a href="#one" className="button">
                Learn more
              </a>
            </li>
          </ul>
        </Container>
        {sections}
      </section>
    )
  }
}

export default Studio

Studio.defaultProps = {
  sections: [
    {
      title: 'Express Yourself',
      description:
        'Bring ideas and your favorite fabric or choose from my supply! Recent student projects have included prom/ball gowns, rompers, shirts, skirts, pants, jackets and dresses of all kinds, and costumes. For responsible, creative and industrious students ages 10 through 18.',
      image:
        'https://kadk.dk/sites/default/files/styles/top_slideshow/public/data-slideshow-element/p1310241.jpg?itok=TOkjje4p&c=4bffcf2bf0d9149cc8c96c107cc1419f',
    },
    {
      title: 'Learn Better',
      description:
        "I have over 30+ years of experience in Fashion after graduating La Chambre Syndicale de la Couture Parisienne in Paris in the 80's; the last 16 years of which I have been teaching Fashion Design to local students here in the Bay Area. I will guide you through the Fashion Design process from sketching, to pattern-making, draping, cutting and finally fitting a garment (or several).",
      image:
        'http://www.hamstech.com/blog/wp-content/uploads/2017/07/fashion-designing-730x410.jpg',
    },
    {
      title: 'Be Fabulous',
      description: `Your hard work will be showcased in our annual Spring Runway Show. 

        “What you wear is how you present yourself to the world, especially today, when human contacts are so quick. Fashion is instant language.” - Miuccia Prada`,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/8/86/Rosenthal_Tee_Final_Design_2016_SS.jpg',
    },
  ],
}
