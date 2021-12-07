import React from 'react';
import Layout from "../components/layout"
import ChildBox from "../components/childBox"
import CirclePath from "../components/circlePath"
import {graphql} from "gatsby"

const Publicaciones = ({
    data:{ allStrapiArticulos:{edges:articulos} }
}) => {

    console.log(articulos);
    return (
        <Layout>
            <div className="circlePathContainer" >
                <CirclePath text="Publicaciones•" textColor="#000000" />
            </div>
            <div className="publicaciones">
                <div className="publicaciones_content">
                    
                  
                     <div className="tile is-ancestor" >
                        
                            {
                                articulos.map((e, i) => {
                                    var current = e.node;
                                    console.log(articulos.length);
                                    return(
                                        <div className="tile is-parent" >
                                        <div key={current.id} className="tile is-child" >
                                            <ChildBox autor={current.Autor} titulo={current.Titulo} id={current.id} />
                                        </div>
                                        </div>
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
