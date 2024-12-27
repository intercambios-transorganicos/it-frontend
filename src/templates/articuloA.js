import React , {useState, useEffect} from 'react';
import {Link} from "gatsby"
import {getImage, GatsbyImage} from "gatsby-plugin-image"
import {graphql} from "gatsby"
import MediaArticles from "../components/mediaArticles"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo, faImages} from '@fortawesome/free-solid-svg-icons'
import Layout from "../components/layout"
import "./articuloA.scss";

const Articuloa = ({ data }) => {

    const {id,Autor,Titulo,Subtitulo,Contenido,imagenes,documents, oembed} = data.strapiArticulos;
    console.log(imagenes);
    var images = imagenes
    
    var[hasImages, setImages] = useState(false);
    const[iFrame, setFrame] = useState(null)

    useEffect(() =>{
        if(oembed){
            //iFrame = JSON.parse(oembed).rawData.html
            setFrame(JSON.parse(oembed).rawData.html)
            console.log(iFrame)
          }else{
            console.log("no oembed")
          }
    
         if(images.length > 1){
             setImages(true);
             console.log(hasImages);
         }
         console.log(images);
    },[]);

    console.log(documents)

    return (
        <Layout>
            <div className="proyectoB_container container">

                <div className="hero is-primary hero-tit">
                <div className="hero-body">
                    <p className="title projectTitle">
                        {Titulo}
                    </p>
                </div>
                </div>

                <div className="pt-6">
                <div className="section">
                        <div className="content">
                        <h1 className="title has-text-white">{Subtitulo}</h1>
                            <h3 className="title has-text-dark">Por : {Autor}</h3>
                            <p>{Contenido}</p>
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
                                var current = e.archivo.url
                                var currentNombre = e.titulo
                                console.log(current,currentNombre);
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

            {/* <div className="articuloA contenedor"> 

            <div className="a_section" >
                <div className="a_section_textContent">
                    <h1 className="titulo">{Titulo}</h1>
                    <h1 className="subTitulo">{Subtitulo}</h1>
                    <p> {Contenido} </p>
                </div>
                <div className="articleButtons level" >
                    <div className="level-item has-text-centered articleButton"> 
                        <FontAwesomeIcon 
                        size="2x" 
                        className={hasImages ? "articuloAIcons" : "aButtonsDisable"} 
                        icon={faImages} />
                    </div>
                    <div className="level-item has-text-centered articleButton aButtonsDisable"> 
                        <FontAwesomeIcon 
                        size="2x" 
                        className="articuloAIcons" 
                        icon={faVideo} />
                    </div>
                </div>
            </div>

            
            
            <div className="b_section" >
                <MediaArticles images={images} />
            </div>
            


        </div> */}

        </Layout>
    );
}

export const query = graphql`
    query Articulo($articuloId: String) {
    strapiArticulos(id: {eq: $articuloId}) {
            id
            Autor
            Titulo
            Subtitulo
            Contenido
            documents {
              titulo
              archivo {
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
                    width: 1364
                    height: 1300
                    )
                }
              }
            }
    }
}

`

export default Articuloa;
