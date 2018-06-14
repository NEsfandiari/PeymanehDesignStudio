import React, { Component } from 'react'
import Styled from 'styled-components'
import StudioSection from './atoms/studioSection'

const Container = Styled.div`
`

class Studio extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    let sections = []
    sections = this.props.sections.map(section => (
      <StudioSection
        title={section.title}
        description={section.description}
        image={section.image}
      />
    ))
    return (
      <section id="one" className="wrapper style2 spotlights">
        <div className="inner">
          <h2>Peymaneh's Fashion Design Classes</h2>
        </div>

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
        'Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.',
      image:
        'https://kadk.dk/sites/default/files/styles/top_slideshow/public/data-slideshow-element/p1310241.jpg?itok=TOkjje4p&c=4bffcf2bf0d9149cc8c96c107cc1419f',
    },
    {
      title: 'Learn Better',
      description:
        'Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.',
      image:
        'http://www.hamstech.com/blog/wp-content/uploads/2017/07/fashion-designing-730x410.jpg',
    },
    {
      title: 'Be Fabulous',
      description:
        'Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/8/86/Rosenthal_Tee_Final_Design_2016_SS.jpg',
    },
  ],
}
