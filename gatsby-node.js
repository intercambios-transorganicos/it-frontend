/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

 exports.onCreateWebpackConfig = ({
  actions,
  plugins,
  stage
}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        path: require.resolve("path-browserify")
      },
      fallback: {
        fs: false,
      }
    }
  })
}


const path = require("path")
// Implementar la API de Gatsby "createPages". Esto se llama una vez que el
// La capa de datos se inicia para permitir que los complementos creen páginas a partir de datos.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  // Consulta de nodos  para usar en la creación de páginas.
  const result = await graphql(
    `
    {
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

// Creamos las paginas por cada proyecto
//console.log(result.data)
const proyectoTemplate = path.resolve(`src/templates/proyectoB.js`)
result.data.proyectos.edges.forEach(({ node }) => {
  const path = node.id
  const pathh = `/${node.titulo.split(' ').join('_').toLowerCase()}/`
  createPage({
    path:pathh,
    component: proyectoTemplate,
    
    context: {
      proyectoId: path,
    },
  })
})
  

}


