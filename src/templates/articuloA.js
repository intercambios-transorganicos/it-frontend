import React , {useState, useEffect} from 'react';
import "../pages/mystyles.scss"
import {graphql} from "gatsby"
import MediaArticles from "../components/mediaArticles"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo, faImages} from '@fortawesome/free-solid-svg-icons'
import Layout from "../components/layout"

const Articuloa = ({ data }) => {

    const {id,Autor,Titulo,Subtitulo,Contenido,imagenes} = data.strapiArticulos;
    console.log(imagenes);
    var images = imagenes
    //const imgPortada = portada[0].localFile;
    
    var[hasImages, setImages] = useState(false);
  

    useEffect(() =>{
         if(images.length > 1){
             setImages(true);
             console.log(hasImages);
         }
         console.log(images.length);
    },[]);


    return (
        <Layout>
            <div className="articuloA contenedor"> 

            
            <div className="b_section" >
                <MediaArticles images={images} />
            </div>
            

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
                    <div className="level-item has-text-centered articleButton"> 
                        <FontAwesomeIcon 
                        size="2x" 
                        className="articuloAIcons" 
                        icon={faVideo} />
                    </div>
                </div>
            </div>

        </div>
        </Layout>
    );
}

export const query = graphql`
    query MyQuery($pageId: String) {
    strapiArticulos(id: {eq: $pageId}) {
        id
        Autor
        Titulo
        Subtitulo
        Contenido
        videos {
          localFile {
            id
            url
          }
        }
        imagenes {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
            }
          }
        }
    }
}

`

export default Articuloa;
