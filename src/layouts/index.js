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
    <Helmet />
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
