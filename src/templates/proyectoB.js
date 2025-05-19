import React from 'react';
import Layout from "../components/layout"
import "./proyectoB.scss"
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import {Link} from "gatsby"
import {graphql} from "gatsby"

const Proyectob = ({data}) => {
    const{id, nombre, titulo, subtitulo, contenido, imagenes, oembeds, documents, links} = data.strapiProyectos;
    
    function obtenerOembed(oembed){
      const youtube = oembed.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/)
      const vimeo = oembed.match(/https?:\/\/(?:www\.)?vimeo\.com\/(?:video\/)?(\d+)(?:\/)?/)
      const tiktok = oembed.match(/(?:https?:\/\/)?(?:www\.|m\.)?tiktok\.com\/(?:@[\w.-]+\/video\/|v\/)(\d+)/);
      if(youtube) return `https://www.youtube.com/embed/${youtube[1]}?feature=oembed`;
      if(vimeo) return `https://player.vimeo.com/video/${vimeo[1]}?app_id=122963}`;
      if(tiktok) return `https://www.tiktok.com/embed/v3/${tiktok[1]}`
      return `https://www.youtube.com/embed/aDm5WZ3QiIE?feature=oembed` //Si no encuentra el video
    }

    if(documents){
        // console.log(documents[0])
      }else{
        // console.log("no docx")
      }

  
    return (
       <Layout>
         <div className="proyectoB_container container">

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
                        <p style={{ whiteSpace: 'pre-line' }}>{contenido}</p>
                       </div>
                        {
                            oembeds?.oembeds.map((e,i)=>{
                                // console.log(e)
                                return(
                                  <div className=" video">
                                    <div className="iFrame">
                                      <iframe width="200" height="113" src={obtenerOembed(e)} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen title="Encuentro Muntref - IES Juan Ramón Fernández"></iframe>
                                    </div> 
                                  </div>
                                )
                            })
                        }
                    </div>

                    <div className="section links">
                        <div className="content pl-0">
                        <h1 className="sibtitle">Links:</h1>
                        </div>
                          {
                            documents.map((e,i)=>{
                              var current = e.archivo.url
                              var currentNombre = e.archivo.name
                              // console.log(current);
                              return(
                                <div className="buttons">
                                  <button className="button bLinks ">
                                    <a className="has-text-white" href={current} target="_blank">{currentNombre}</a>
                                  </button>
                                </div>
                              )
                            })
                          }
                          {
                            links.links?.flat().length && links.links?.map((arr, i) => {
                                let nombre = arr[0]
                                let url = arr[1]
                                return (
                                  <div className="buttons">
                                  <button className="button bLinks ">
                                    <Link className="has-text-white" to={url} target="_blank">{nombre}</Link>
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
                                // console.log(e)
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
      oembeds{
        oembeds
      }
      links{
        links
      }
      documents {
        archivo {
          name
          url
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
