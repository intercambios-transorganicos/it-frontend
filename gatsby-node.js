/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

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

// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
//     if (stage === 'build-html') {
//         actions.setWebpackConfig({
//             module: {
//                 rules: [
//                     {
//                         test: /tiny-slider-react/,
//                         use: loaders.null(),
//                     },
//                 ],
//             },
//         });
//     }
// };

const path = require("path")
// Implementar la API de Gatsby "createPages". Esto se llama una vez que el
// La capa de datos se inicia para permitir que los complementos creen páginas a partir de datos.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  // Consulta de nodos  para usar en la creación de páginas.
  //ARTICULOS
  const result = await graphql(
    `
    {
      articulos : allStrapiArticulos {
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
                  gatsbyImageData(placeholder: DOMINANT_COLOR)
                }
              }
            }
          }
        }
      }

      proyectos : allStrapiProyectos {
        edges {
          node {
            id
            titulo
            subtitulo
            strapiId
            contenido
            imagenes {
              localFile {
                childrenImageSharp {
                  gatsbyImageData(placeholder: DOMINANT_COLOR)
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
// Creamos las paginas por cada articulo.
const articuloTemplate = path.resolve(`src/templates/articuloA.js`)
result.data.articulos.edges.forEach(({ node }) => {
  const path = node.id
  createPage({
    path,
    component: articuloTemplate,
    
    context: {
      articuloId: path,
    },
  })
})

// Creamos las paginas por cada proyecto.
const proyectoTemplate = path.resolve(`src/templates/proyectoA.js`)
result.data.proyectos.edges.forEach(({ node }) => {
  const path = node.id
  createPage({
    path,
    component: proyectoTemplate,
    
    context: {
      proyectoId: path,
    },
  })
})
  
}