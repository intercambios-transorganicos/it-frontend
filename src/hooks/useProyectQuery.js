import { useStaticQuery, graphql } from "gatsby"

const Useproyectquery = () => {
        
    const data = useStaticQuery(graphql`
    {
      allStrapiProyectos {
        edges {
          node {
            id
            titulo
            subtitulo
            contenido
            portada {
              id
              name
              localFile {
                publicURL
                childImageSharp {
                  id
                  gatsbyImageData(
                      placeholder: DOMINANT_COLOR, 
                      layout:  FULL_WIDTH
                      )
                }
              }
            }
          }
        }
      }
    }
  `)


  const secProyectos = data.allStrapiProyectos.edges.map(elem =>{
    const {id, titulo, subtitulo, contenido, portada} = elem.node
    return {id, titulo, subtitulo, contenido, portada}
   
  });

  console.log(secProyectos)

     return secProyectos
      
  
}

export default Useproyectquery;
