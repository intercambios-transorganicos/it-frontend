import React from 'react';
import {Link} from "gatsby"
import Layout from "../components/layout"
import CirclePath from "../components/circlePath"
import {graphql} from "gatsby"
import "./publicaciones02.scss"

const Articulos = ({
    data:{allStrapiArticulos:{edges:articulos}}
}) => {
    
    return (
        <Layout>
            <CirclePath text="• Articulos ▪ " textColor="#ffffff"/>
            <div className="articulos">
                <div className="section">
                    
                    {
                        articulos.map((e,i) =>{
                            if(e.node.documents[0]){
                                console.log(e.node.documents[0].documento[0].localFile.publicURL);
                            }

                            var url = e.node.Titulo.split(' ').join('_').toLowerCase();
                            
                            return(
                                <div>
                                    <Link to={`../${url}`}>
                                    <div className="publicacion section has-text-white">
                                        <h1 className="title has-text-white">{e.node.Titulo}</h1>
                                        <h2 className="subtitle">{e.node.Subtitulo}</h2>
                                        <div className="level">
                                            <div className="level-left">
                                                <div className="level-item">
                                                    
                                                </div>
                                            </div>
                                            <div className="level-right">
                                                <div className="level-item">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                    <div className="divider"></div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </Layout>
    );
}


export const query = graphql`
  query {
    allStrapiArticulos {
      edges {
        node {
          id
          Autor
          Titulo
          Subtitulo
          Contenido
          oembed
          documents {
              titulo
              documento {
                localFile {
                  publicURL
                }
              }
            }
            imagenes {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
        }
      }
    }
  }
`


export default Articulos;
