import React from 'react';
import Layout from "../components/layout"
import CirclePath from "../components/circlePath"
import {Link} from "gatsby"
import {graphql} from "gatsby"
import "./proyectos02.scss"
import ChildBox from "../components/childbox"

const Proyectos = ({
    data:{allStrapiProyectos: {edges:proyectos} }
}) => {
    
    return (
        <Layout>
            <div className="containerWrapper">
            <CirclePath text="• Proyectos ▪ " textColor="#ffffff" />
            <div className="container">

                <div className="proyectos02Content">

                    <div className="grillaProyectos02" >
                        
                            {
                                proyectos?
                                proyectos.map((e, i) => {
                                var current = e.node;
                                
                                var url = current.titulo.split(' ').join('_').toLowerCase()
                                return(
                                    <Link  key={current.id} to={`../${url}`} >
                                        <ChildBox imagen={current.imagenes[0].localFile} titulo={current.titulo} subtitulo={current.subtitulo} />
                                    </Link>
                                )
                            })
                            :
                            <div>no data</div>
                            } 
                    
                    </div> 

                </div>

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
                  transformOptions: {fit: COVER, cropFocus: CENTER}
                  width: 400
                  height: 400
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


