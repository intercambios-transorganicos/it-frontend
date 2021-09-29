 import React from 'react'
 import { useStaticQuery , graphql } from "gatsby";
 import {GatsbyImage, getImage} from 'gatsby-plugin-image'

 export default function Homepage() {
     const data = useStaticQuery(graphql`
         {
    allStrapiHomepage {
      edges {
        node {
          id
          titulo
          descripcion
          Portada {
            localFile {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  }
   `)

var nodo = data.allStrapiHomepage.edges[0].node;
var nodoid = nodo.id; 
var titulo = nodo.titulo ;
var des = nodo.descripcion; 
var nodo_img = nodo.Portada.localFile;
var imagen = getImage(nodo_img);
console.log(nodoid, titulo, des)

     return (
         <div className="homepage">
             <h1>{titulo}</h1>
             <GatsbyImage className="homepageimage" 
                             key={nodoid} 
                             image={imagen} 
                             alt={titulo}
                              />
             <p>{des}</p>
         </div>
     )
 }
