/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
// exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
//     if (stage === 'build-javascript') {
//       const config = getConfig()
//       const miniCssExtractPlugin = config.plugins.find(
//         plugin => plugin.constructor.name === 'MiniCssExtractPlugin'
//       )
//       if (miniCssExtractPlugin) {
//         miniCssExtractPlugin.options.ignoreOrder = true
//       }
//       actions.replaceWebpackConfig(config)
//     }

    
//   }


const path = require("path")
// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  // Query for markdown nodes to use in creating pages.
  const result = await graphql(
    `
    {
      allStrapiArticulos {
        edges {
          node {
            id
            Autor
            Titulo
            Subtitulo
            Contenido
            imagenes {
              localFile {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
                }
              }
            }
          }
        }
      }
    }
    `
  )
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  // Create pages for each markdown file.
  const articuloTemplate = path.resolve(`src/templates/articuloA.js`)
  result.data.allStrapiArticulos.edges.forEach(({ node }) => {
    const path = node.id
    createPage({
      path,
      component: articuloTemplate,
      // In your blog post template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        pageId: path,
      },
    })
  })
}