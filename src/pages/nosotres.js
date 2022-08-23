import React, {useState} from 'react';
//import TeamCarousel from "../components/teamCarousel"
import CirclePath from "../components/circlePath"
import Layout from "../components/layout"
import "./nosotres.scss"
import {graphql} from "gatsby"
import {GatsbyImage, getImage} from "gatsby-plugin-image"
//import loadable from "@loadable/component"
//const MyLoadable2 = loadable(() => import("../components/teamCarousel"),{ssr:true});


const Nosotres = ({data:{allStrapiMembers:{edges:members}}}) => {

  var directora = [];
  var alumnx = [];
  var exalumnxs = [];
  var colaboradorx = [];

  members.map((e,i)=>{
    var current = e.node;
    switch(current.rol){
      case "directora":
      directora.push(current)
      break
      case "alumnx":
        alumnx.push(current);
      break
      case "exalumnxs":
        exalumnxs.push(current);
      break
      case "colaboradorx":
        colaboradorx.push(current)
      break
      default:
        console.log("error");

    }

  })
    
    return (
        <Layout>
            <div className="teamText" >
                 
                     <CirclePath text="Nuestro • Equipo • " textColor="#242424" />
               
            </div>
            <div className="nosotres">
               <div className="direccionWrapper " >
                <div className="tituloDireccion" >
                  <h1  className="title">Directora:</h1>
                </div>
                {
                  directora.map((e,i) =>{
                    
                    var img = getImage(e.foto[0].localFile)
                    return(
                      <div key={i} className="columns memberWrapper" >
                        <div className="column memberImageContainer" >
                            <GatsbyImage className="roundPicture" image={img} alt={e.nombre} />
                        </div>
                        <div className="column is-four-fifths memberInfoContent" >
                          <div className="contentTop" >
                              <h1 className="title">{e.nombre}</h1>
                              <h1 className="subtitle">{e.titulo}</h1>
                          </div>
                          <p className="" >{e.descripcion}</p>
                        </div>
                      </div>
                    )
                  })
                }
               </div>

               <div className="alumnxsWrapper " >
                <div className="tituloAlumnxs" >
                  <h1 className="title">Alumnxs De Investigacion</h1>
                </div>
                  {
                    alumnx.map((e,i)=>{
                      var img = getImage(e.foto[0].localFile)
                      return(
                        <div key={i} className="columns memberWrapper" >
                          <div className="column memberImageContainer" >
                              <GatsbyImage className="roundPicture" image={img} alt={e.nombre} />
                          </div>
                          <div className="column is-four-fifths memberInfoContent" >
                            <div className="contentTop" >
                                <h1 className="title">{e.nombre}</h1>
                                <h1 className="subtitle">{e.titulo}</h1>
                            </div>
                            <p className="" >{e.descripcion}</p>
                          </div>
                        </div>
                      )
                    })
                  }
                
               </div>

               <div className="colaboradorxsWrapper" >
               <div className="tituloColaboradorxs" >
                  <h1 className="title">Colaboradorxs</h1>
                </div>
                  {
                    colaboradorx.map((e,i)=>{
                      var img = getImage(e.foto[0].localFile)
                      return(
                        <div key={i} className="columns memberWrapper" >
                          <div className="column memberImageContainer" >
                              <GatsbyImage className="roundPicture" image={img} alt={e.nombre} />
                          </div>
                          <div className="column is-four-fifths memberInfoContent" >
                            <div className="contentTop" >
                                <h1 className="title">{e.nombre}</h1>
                                <h1 className="subtitle">{e.titulo}</h1>
                            </div>
                            <p className="" >{e.descripcion}</p>
                          </div>
                        </div>
                      )
                    })
                  }
               </div>

               <div className="exalumnxsWrapper" >
               <div className="tituloExalumnxs" >
                  <h1 className="title">Exalumnxs</h1>
                </div>
                  {
                    exalumnxs.map((e,i)=>{
                      var img = getImage(e.foto[0].localFile)
                      return(
                        <div key={i} className="columns memberWrapper" >
                          <div className="column memberImageContainer" >
                              <GatsbyImage className="roundPicture" image={img} alt={e.nombre} />
                          </div>
                          <div className="column is-four-fifths memberInfoContent" >
                            <div className="contentTop" >
                                <h1 className="title">{e.nombre}</h1>
                                <h1 className="subtitle">{e.titulo}</h1>
                            </div>
                            <p className="" >{e.descripcion}</p>
                          </div>
                        </div>
                      )
                    })
                  }
               </div>
            </div>
               
        </Layout>
    );
}

export default Nosotres;

export const query = graphql`
  {
    allStrapiMembers {
      edges {
        node {
          id
          nombre
          titulo
          rol
          descripcion
          foto {
            localFile {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR, aspectRatio:1)
              }
            }
          }
        }
      }
    }
  }
`