import React from 'react';
import Layout from "../components/layout"
import ChildBox from "../components/childBox"
import CirclePath from "../components/circlePath"
import {graphql} from "gatsby"
import "./publicaciones.scss"

const Publicaciones = ({
    data:{ allStrapiArticulos:{edges:articulos} }
}) => {

    console.log(articulos);
    return (
        <Layout>
            
            <CirclePath text="Publicaciones•" textColor="#000000" />
  
            <div className="publicaciones">

                <div className="publicacionesContent">

                     <div className="grillaPublicaciones" >
                        
                            {
                                articulos.map((e, i) => {
                                    var current = e.node;
                                    console.log(articulos.length);
                                    return(
                                        <ChildBox key={current.id} autor={current.Autor} titulo={current.Titulo} id={current.id} />
                                    )
                                })
                            } 
                       
                    </div> 

                </div>

            </div>
        </Layout>
    );
}



export const query = graphql`
  {
    allStrapiArticulos {
      edges {
        node {
          id
          Autor
          Titulo
          Subtitulo
          Contenido
          portada {
            id
            localFile {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  height:600
                  )
              }
            }
          }
        }
      }
    }
  }
`

export default Publicaciones;
