const axios = require('axios')
const crypto = require('crypto')

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'build-html') {
    config.loader('null', {
      test: /aos/,
      loader: 'null-loader',
    })
  }
}

exports.sourceNodes = async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators
  let data = await axios.get(
    'https://openapi.etsy.com/v2/shops/PeymanehDesigns/listings/active.js?api_key=ezs05dfqp9n6hcv0bef9us2r&includes=MainImage&fields=url,price,title&limit=6'
  )
  //   etsy api trimming
  data = data.data.slice(5, data.length)
  data = JSON.parse(data.slice(0, data.length - 2))

  data.results.map((item, i) => {
    const itemNode = {
      id: `${i}`,
      parent: `__SOURCE__`,
      internal: { type: `EtsyItem` },
      children: [],
      url: item.url,
      title: item.title,
      image: item.MainImage.url_fullxfull,
    }
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(itemNode))
      .digest(`hex`)
    itemNode.internal.contentDigest = contentDigest
    createNode(itemNode)
  })
  return
}
