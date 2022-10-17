import React from 'react';
import Layout from "../components/layout"
import "./proyectoB.scss"
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import {Link} from "gatsby"
import {graphql} from "gatsby"

const Proyectob = ({data}) => {
    const{id, nombre, titulo, subtitulo, contenido, imagenes, oembed, documents} = data.strapiProyectos;
    console.log(imagenes)
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
         {/* <div className="proyectoB_container container">

             <div className="hero is-primary hero-tit">
              <div className="hero-body">
                  <p className="title projectTitle">
                      {nombre}
                  </p>
              </div>
            </div>

            <div className="columns">
                <div className="column">
                    <div className="section mt-6">
                       <div className="content">
                       <h1 className="title has-text-white">{titulo}</h1>
                        <h3 className="title">{subtitulo}</h3>
                        <p>{contenido}</p>
                       </div>
                        {oembed?
                        <div className=" video">
                            <div className="iFrame" dangerouslySetInnerHTML={{ __html: iFrame}} /> 
                        </div>
                        :
                        <div></div>
                        } 
                    </div>

                    <div className="section links">
                        <div className="content pl-0">
                        <h1 className="sibtitle">Links:</h1>
                        </div>
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
                <div className="column">
                    <div className="section">
                        {
                            imagenes.map((e,i)=>{
                                console.log(e)
                                var current = getImage(e.localFile);
                                return(
                                    <div className="section">
                                        <GatsbyImage key={e+i} image={current} />
                                    </div>
                                )
                            })
                        }
                    </div>

              
                </div>
            </div>
            
        </div> */}
         <div className="proyectoB_container container">

            <div className="hero is-primary hero-tit">
              <div className="hero-body">
                  <p className="title projectTitle">
                      {nombre}
                  </p>
              </div>
            </div>

            <div className="pt-6">
            <div className="section">
                       <div className="content">
                       <h1 className="title has-text-white">{titulo}</h1>
                        <h3 className="title has-text-white">{subtitulo}</h3>
                        <p>{contenido}</p>
                       </div>
                        {oembed?
                        <div className=" video">
                            <div className="iFrame" dangerouslySetInnerHTML={{ __html: iFrame}} /> 
                        </div>
                        :
                        <div></div>
                        } 
                    </div>

                    <div className="section links">
                        <div className="content pl-0">
                        <h3 className="sibtitle has-text-white">Links:</h3>
                        </div>
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

                        <div className="section">
                        {
                            imagenes.map((e,i)=>{
                                console.log(e)
                                var current = getImage(e.localFile);
                                return(
                                    <div className="">
                                        <GatsbyImage key={e+i} image={current} />
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

export default Proyectob;

export const query = graphql`
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
