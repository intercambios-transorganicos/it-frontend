/*import React from 'react';
import {graphql} from "gatsby"
import MediaProyectos from "../components/mediaProyectos"
import {Link} from "gatsby"
//import loadable from "@loadable/component"
import Layout from "../components/layout"
import "./proyectoA.scss"

//const MyLoadable3 = loadable(() => import("../components/mediaProyectos"));

const Proyectoa = ({data}) => {

    const{id, nombre, titulo, subtitulo, contenido, imagenes, oembed, documents} = data.strapiProyectos;

    if(documents){
      console.log(documents[0])
    }else{
      console.log("no docx")
    }


    if(oembed){
      var iFrame = JSON.parse(oembed).rawData.html
      console.log(iFrame)
    }else{
      console.log("no oembed")
    }

    return (
        <Layout>
            <div className="proyectoContainer">
                 <div className="proyectoPortada">
                    <MediaProyectos imagenes={imagenes} />
                      <div className="portadaTitulo">
                          <h1>{nombre}</h1>
                      </div>
                 </div>

                 <div className="section general">

                    <div className="container">
                        <div className="section info has-text-white">
                            <h1 className="title has-text-white" >{titulo}</h1>
                            <p>{contenido}</p>
                        </div>
                        {oembed?
                        <div className="section video">
                            <div className="iFrame" dangerouslySetInnerHTML={{ __html: iFrame}} /> 
                        </div>
                        :
                        <div></div>
                        } 
                        <div className="section links">
                          {
                            documents.map((e,i)=>{
                              var current = e.documento[0].localFile.publicURL
                              var currentNombre = e.documento[0].name
                              console.log(current);
                              return(
                                <div className="buttons">
                                  <button className="button bLinks ">
                                    <a className="has-text-white" href={current}>{currentNombre}</a>
                                  </button>
                                </div>
                              )
                            })
                          }
                          <div className="buttons">
                              <button className="button bLinks ">
                              <Link className="has-text-white" to="/proyectos02" > + Proyectos </Link>
                              </button>
                          </div>
                        </div>
                    </div>
                 </div>

            </div>
        </Layout>
    );
}*/

/*export const query = graphql`
query Proyecto($proyectoId: String){
    strapiProyectos(id: {eq: $proyectoId}) {
      id
      nombre
      titulo
      subtitulo
      contenido
      oembed
      documents {
        documento {
          name
          localFile {
            publicURL
          }
        }
      }
      imagenes {
        localFile {
          childImageSharp {
            gatsbyImageData(
              placeholder: DOMINANT_COLOR
              layout: CONSTRAINED
              transformOptions: {fit: COVER, cropFocus: CENTER}
              width: 1920
              height: 1080
              )
          }
        }
      }
    }
  }
  
`


export default Proyectoa;*/
