import React from 'react';
import "./proyectoA.scss"
import {graphql} from "gatsby"
import MediaProyectos from "../components/mediaProyectos"
//import loadable from "@loadable/component"
import Layout from "../components/layout"
import InfoExpanded from "../components/infoExpandedx2"

//const MyLoadable3 = loadable(() => import("../components/mediaProyectos"));

const Proyectoa = ({data}) => {

    const{id, nombre, titulo, subtitulo, contenido, imagenes} = data.strapiProyectos;
    console.log(id, nombre, titulo, subtitulo, contenido);
    return (
        <Layout>
            <div className="proyectoContainer">
                 <div className="proyectoPortada">
                    <MediaProyectos imagenes={imagenes} />
                      <div className="portadaTitulo">
                          <h1>{nombre}</h1>
                          <h2>{titulo}</h2>
                      </div>
                 </div>

                  <div className="proyectoContent">
                    <InfoExpanded titulo={subtitulo} desc={contenido} desc2={contenido} bgColor="#eeeeee" txColor={"#242424"} modalT={nombre} modalP={contenido} />
                 
                  </div>
            </div>
        </Layout>
    );
}

export const query = graphql`
query Proyecto($proyectoId: String){
    strapiProyectos(id: {eq: $proyectoId}) {
      id
      nombre
      titulo
      subtitulo
      contenido
      imagenes {
        localFile {
          childImageSharp {
            gatsbyImageData(
              placeholder: DOMINANT_COLOR
              layout: CONSTRAINED
                  width: 1800
                  height: 800
              )
          }
        }
      }
    }
  }
  
`


export default Proyectoa;
