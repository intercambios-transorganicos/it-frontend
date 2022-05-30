import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const SecProyectQuery = () => {
        
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


  const secProyectos = data.allStrapiProyectos.edges.map((elem, index) =>{
    var linkUrl = elem.node.id;
    var currentImage = elem.node.portada[0];
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
    
  console.log(linkUrl, 
    gifUrl ,
    currentImage, 
    currTitle, 
    currSubTitle, 
    rev)

     return {
         linkUrl, 
         gifUrl ,
         currentImage, 
         currTitle, 
         currSubTitle, 
         rev
     }
  });

}

export default SecProyectQuery;
