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
            Imagen {
              id
              localFile {
                childImageSharp {
                  id
                  gatsbyImageData(layout: CONSTRAINED)
                }
              }
            }
          }
        }
      }
    }
  `)

  const nodo = data.allStrapiHomepage.edges[0].node;
  const nodoImagen = data.allStrapiHomepage.edges[0].node.Imagen[0].localFile;
  const id = nodo.id;
  const titulo = data.allStrapiHomepage.edges[0].node.titulo;
  const descript = data.allStrapiHomepage.edges[0].node.descripcion;
  const imagen = getImage(nodoImagen);
  console.log(nodo, id);
  console.log(imagen);

    return (
        <div className="homepage">
            <h1>{titulo}</h1>
            <GatsbyImage className="homepageimage" 
                            key={id} 
                            image={imagen} 
                            alt={id}
                             />
            <p>{descript}</p>
        </div>
    )
}
