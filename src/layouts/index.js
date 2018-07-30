import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'

const Container = styled.div`
  img {
    border-radius: 15px;
  }
`

const Layout = ({ children }) => (
  <Container>
    <Helmet
      title="Peymahneh's Design Studio"
      link={[
        {
          rel: 'Design Icon',
          type: 'image/png',
          href: `http://sisterhoodevent.com/wp-content/uploads/2018/04/cropped-Dress-for-success-favicon-270x270.png`,
        },
      ]}
    />
    {children()}
  </Container>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
