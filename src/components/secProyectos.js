import React from 'react'
import "./secProyectos.scss"
import Contenedor from "./contenedorProyecto"
import {Link} from "gatsby"
import {getImage} from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from "gatsby"
function SecProyectos() {

    
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
              localFile {
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

  //console.log(data.allStrapiProyectos)

    return (

        <div className = "wrapper-proyectos" >
                
            {
                data.allStrapiProyectos.edges.map((elem, index) =>{
                    var currentImage = getImage(elem.node.portada[0].localFile)
                    var currTitle = elem.node.titulo;
                    var currSubTitle = elem.node.subtitulo
                    var rev = false;
                    console.log(elem.node.id)
                    if(index%2 === 0){
                        rev = true
                    }
                    return (
                        <Link key={elem.node.id} to={`../${elem.node.id}`} >
                            <Contenedor 
                            currentImage={currentImage} 
                            currTitle={currTitle} 
                            currSubTitle={currSubTitle} 
                            reversed={rev}
                            /> 
                        </Link>
                    )

                    })
                }
        </div>

    )

}

export default SecProyectos