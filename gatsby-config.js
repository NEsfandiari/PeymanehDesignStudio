module.exports = {
  siteMetadata: {
    title: "Peymaneh's design studio",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-postcss-sass',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Peymaneh's Design Studio`,
        short_name: `Peymie`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/css/images/intro.svg`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
  pathPrefix: `/PeymanehDesignStudio`,
}
