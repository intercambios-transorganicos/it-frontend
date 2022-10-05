import React, {useState, useEffect} from "react"
//import ReactPageScroller from 'react-page-scroller';
import Layout from "../components/layout"
import Seo from "../components/seo"
import About1 from "../components/about1"
import ReactPageScroller from 'react-page-scroller';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./index.scss"
import SecAventura from "../components/SecAventura"
import FooterV2 from "../components/FooterV2";
import Contenedor from "../components/contenedorProyecto"
import ContenedorGif from "../components/contenedorProyectoGif"
import {getImage} from 'gatsby-plugin-image'
import MediaQuery from 'react-responsive';
import { graphql } from "gatsby"
const IndexPage = ({data}) => {

    return(
      <Layout >
        <div className="landing-wrapper">
        <Seo title = "Home" / >

      
        <MediaQuery maxWidth={767}>
            <About1 / >
            <SecAventura / >

              {/* PROYECTOS */}
              
            <div className="pW">
            {
                data.allStrapiProyectos.edges.map((elem, index) =>{
                  var currentImage = getImage(elem.node.portada[0].localFile)
                  var currTitle = elem.node.titulo;
                  var currSubTitle = elem.node.subtitulo
                  var rev = false;
                  var gifName = elem.node.portada[0].name
                  var imageType = gifName.split(".")[1];
                  var gifUrl = elem.node.portada[0].localFile.publicURL;
                  var isGif = false;

                  if(imageType === "gif"){
                    isGif = true
                  }else{
                    isGif = false
                  }

                  if(index%2 === 0){
                      rev = true
                  }

                if(isGif){
                    console.log(elem.node.portada[0].localFile.publicURL)
                  return(
                      <ContenedorGif
                      key={elem.node.id}
                      linkUrl={elem.node.id}
                      gifUrl={gifUrl}
                      currentImage={currentImage} 
                      currTitle={currTitle} 
                      currSubTitle={currSubTitle} 
                      reversed={rev}
                      />
                    
                  )

                }else{
                  return (
                    
                        <Contenedor 
                        key={elem.node.id}
                        linkUrl={elem.node.id}
                        gifUrl={gifUrl}
                        currentImage={currentImage} 
                        currTitle={currTitle} 
                        currSubTitle={currSubTitle} 
                        reversed={rev}
                        />
                )
                }

                  })
              }
            </div>

              {/* <FooterV2/> */}
        </MediaQuery>

        <MediaQuery minWidth={767}>
        <ReactPageScroller
        >
            <About1 / >
            <SecAventura  / >

              {/* PROYECTOS */}
              
              {
                data.allStrapiProyectos.edges.map((elem, index) =>{
                  var currentImage = getImage(elem.node.portada[0].localFile)
                  var currTitle = elem.node.titulo;
                  var currSubTitle = elem.node.subtitulo
                  var rev = false;
                  var gifName = elem.node.portada[0].name
                  var imageType = gifName.split(".")[1];
                  var gifUrl = elem.node.portada[0].localFile.publicURL;
                  var isGif = false;

                  if(imageType === "gif"){
                    isGif = true
                  }else{
                    isGif = false
                  }

                  if(index%2 === 0){
                      rev = true
                  }

                if(isGif){
                    console.log(elem.node.portada[0].localFile.publicURL)
                  return(
                      <ContenedorGif
                      key={elem.node.id}
                      linkUrl={elem.node.id}
                      gifUrl={gifUrl}
                      currentImage={currentImage} 
                      currTitle={currTitle} 
                      currSubTitle={currSubTitle} 
                      reversed={rev}
                      />
                    
                  )

                }else{
                  return (
                    
                        <Contenedor 
                        key={elem.node.id}
                        linkUrl={elem.node.id}
                        gifUrl={gifUrl}
                        currentImage={currentImage} 
                        currTitle={currTitle} 
                        currSubTitle={currSubTitle} 
                        reversed={rev}
                        />
                )
                }

                  })
              }

              {/* <FooterV2/> */}

          </ReactPageScroller>
        </MediaQuery>

        </div>
      </Layout>
    )
}

export default IndexPage

export const query = graphql`
  {
    allStrapiProyectos {
      edges {
        node {
          id
          titulo
          subtitulo
          contenido
          portada {
            id
            name
            localFile {
              publicURL
              childImageSharp {
                gatsbyImageData(placeholder: DOMINANT_COLOR, layout: FIXED)
              }
            }
          }
        }
      }
    }
  }
`