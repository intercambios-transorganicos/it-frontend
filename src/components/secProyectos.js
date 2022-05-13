import React from 'react'
import "./secProyectos.scss"
import Contenedor from "./contenedorProyecto"
import ContenedorGif from "./contenedorProyectoGif"
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

  //console.log(data.allStrapiProyectos)

    return (

        <div className = "wrapper-proyectos" >
                
            {
                data.allStrapiProyectos.edges.map((elem, index) =>{
                    var currentImage = getImage(elem.node.portada[0].localFile)
                    var currTitle = elem.node.titulo;
                    var currSubTitle = elem.node.subtitulo
                    var rev = false;
                    var gifName = elem.node.portada[0].name
                    var imageType = gifName.split(".")[1];
                    var gifUrl = elem.node.portada[0].localFile.publicURL;
                    var isGif = false;

                    if(imageType === "gif"){
                      isGif = true
                    }else{
                      isGif = false
                    }

                    if(index%2 === 0){
                        rev = true
                    }

                   if(isGif){
                      console.log(elem.node.portada[0].localFile.publicURL)
                     return(
                      <Link >
                        <ContenedorGif
                        gifUrl={gifUrl}
                        currentImage={currentImage} 
                        currTitle={currTitle} 
                        currSubTitle={currSubTitle} 
                        reversed={rev}
                        />
                      </Link>
                      
                     )

                   }else{
                    return (
                      
                      <Link key={elem.node.id} to={`../${elem.node.id}`} >
                          <Contenedor 
                          gifUrl={gifUrl}
                          currentImage={currentImage} 
                          currTitle={currTitle} 
                          currSubTitle={currSubTitle} 
                          reversed={rev}
                          /> 
                      </Link>
                  )
                   }

                    })
                }
        </div>

    )

}

export default SecProyectos