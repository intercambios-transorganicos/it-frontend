import React from 'react';
import {Link} from "gatsby"
import Layout from "../components/layout"
import CirclePath from "../components/circlePath"
import {graphql} from "gatsby"
import "./publicaciones02.scss"

const Publicaciones = ({
    data:{ allStrapiDocuments:{edges:documentos} }
}) => {

var proyecto = [];
var colaboracion = [];
var entrevista = [];
var ensayo = [];

//console.log(documentos);
documentos.map((e,i)=>{
    var current = e.node;
    //console.log(current.categoria)

    switch(current.categoria){
        case "proyecto":
            proyecto.push(current)
        break
        case "colaboracion":
            colaboracion.push(current);
        break
        case "entrevista":
            entrevista.push(current);
        break
        case "ensayo":
            ensayo.push(current)
        break
        default:
          console.log("error");
  
      }

})

//console.log(proyecto,colaboracion,entrevista,ensayo)
    
    return (
        <Layout>
            
            <CirclePath text="Publicaciones•" textColor="#ffffff" />

            <div className="publicaciones">

                <div className="proyectosWrapper section ">
                    <div className="proyectosTitulo">
                        <h1 className="title has-text-white">Proyectos</h1>
                    </div>
                    {
                        proyecto.map((e,i)=>{
                            console.log(e);
                            return(
                                <div>
                                    <div className="publicacion section has-text-white">
                                        <h1>{e.titulo}</h1>
                                        <h2>{e.descripcion}</h2>
                                        <div className="level">
                                            <div className="level-left">
                                                <div className="level-item">
                                                    <h2>Autor</h2>
                                                </div>
                                            </div>
                                            <div className="level-right">
                                                <div className="level-item">
                                                    <a className="has-text-white" href={e.documento[0].localFile.publicURL}>Link al PDF</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="divider"></div>
                                </div>
                            )
                        })
                    }

                    

                </div>

                <div className="ensayosWrapper section">
                    <div className="ensayosTitulo">
                        <h1 className="title has-text-white">Ensayos y Papers</h1>
                    </div>
                    {
                        ensayo.map((e,i)=>{
                            console.log(e);
                            return(
                                <div>
                                    <div className="publicacion section has-text-white">
                                        <h1>{e.titulo}</h1>
                                        <h2>{e.descripcion}</h2>
                                        <div className="level">
                                            <div className="level-left">
                                                <div className="level-item">
                                                    <h2>Autor</h2>
                                                </div>
                                            </div>
                                            <div className="level-right">
                                                <div className="level-item">
                                                    <a className="has-text-white" href={e.documento[0].localFile.publicURL}>Link al PDF</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="divider"></div>
                                </div>
                            )
                        })
                    }

                    

                </div>

                <div className="colaboracionesWrapper section">
                    <div className="colaboracionesTitulo">
                        <h1 className="title has-text-white">Colaboraciones</h1>
                    </div>
                    {
                        colaboracion.map((e,i)=>{
                            console.log(e);
                            return(
                                <div>
                                    <div className="publicacion section has-text-white">
                                        <h1>{e.titulo}</h1>
                                        <h2>{e.descripcion}</h2>
                                        <div className="level">
                                            <div className="level-left">
                                                <div className="level-item">
                                                    <h2>Autor</h2>
                                                </div>
                                            </div>
                                            <div className="level-right">
                                                <div className="level-item">
                                                    <a className="has-text-white" href={e.documento[0].localFile.publicURL}>Link al PDF</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="divider"></div>
                                </div>
                            )
                        })
                    }

                    

                </div>

                <div className="entrevistasWrapper section">
                    <div className="entrevistasTitulo">
                        <h1 className="title has-text-white">Entrevistas y Prensa</h1>
                    </div>
                    {
                        entrevista.map((e,i)=>{
                            console.log(e);
                            return(
                                <div>
                                    <div className="publicacion section has-text-white">
                                        <h1>{e.titulo}</h1>
                                        <h2>{e.descripcion}</h2>
                                        <div className="level">
                                            <div className="level-left">
                                                <div className="level-item">
                                                    <h2>Autor</h2>
                                                </div>
                                            </div>
                                            <div className="level-right">
                                                <div className="level-item">
                                                    <a className="has-text-white" href={e.documento[0].localFile.publicURL}>Link al PDF</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
  {
    allStrapiDocuments {
      edges {
        node {
          titulo
          descripcion
          categoria
          documento {
            localFile {
              id
              publicURL
            }
          }
        }
      }
    }
  }
`

export default Publicaciones;
