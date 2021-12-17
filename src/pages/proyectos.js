import React from 'react';
import Layout from "../components/layout"
import CirclePath from "../components/circlePath"
import {Link} from "gatsby"
import {graphql} from "gatsby"
import "./proyectos.scss"

const Proyectos = ({
    data:{allStrapiProyectos: {edges:proyectos} }
}) => {
    console.log(proyectos);
    return (
        <Layout>
            <CirclePath text=" Proyectos •" textColor="#000000" />
            <div className="proyectosContainer">
                <div className="galeria">
                    {
                      proyectos?
                      proyectos.map((e, i) => {
                        var current = e.node;
                        console.log(current.id)
                        return(
                            <Link  key={current.id} className="box proyectsBox" to={`../${current.id}`} >
                    
                                    <div className="contentProyectos">
                                        <h1>{current.titulo}</h1>
                                        <h2>{current.subtitulo}</h2>
                                    </div>
                                    
                            </Link>
                        )
                    })
                    :
                    <div>no data</div>
                    }
                </div>
            </div>
        </Layout>
    );
}

export const query = graphql`
  {
    allStrapiProyectos {
      edges {
        node {
          id
          titulo
          subtitulo
          strapiId
          contenido
          imagenes {
            id
            localFile {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  width: 1200
                  height: 600
                  )
              }
            }
          }
        }
      }
    }
  }
`


export default Proyectos;


