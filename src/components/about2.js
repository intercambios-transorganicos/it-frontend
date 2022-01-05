import React, {useEffect, useState, useRef} from 'react';
import { useStaticQuery, graphql } from "gatsby"
import InfoExpanded from './infoExpanded'
import "./about2.scss"
import Preguntas from './preguntas'

const About2 = () => {
    const data = useStaticQuery(graphql`
    {
      allStrapiPreguntas {
        edges {
          node {
            pregunta
          }
        }
      }
    }
  `)

  console.log(data.allStrapiPreguntas.edges);
  var preguntas = data.allStrapiPreguntas.edges;

    // var titulo = "Nuestras preguntas de investigacion...";
    // var sub = "Dedicamos un proceso de investigación transdisciplinaria a la comprensión del problema. Sobre la dimensión adquirida, imaginamos y a veces realizamos estrategias tecno-culturales para descubrir nuevas soluciones."

    // var modalT = "Métodología";
    // var modalP = "Nuestro enfoque crítico sobre los avances y las limitaciones de la tecnología funcional nos llevó a plantear la necesidad de producir dispositivos/interfaces que estimulen, por medio del lenguaje simbólico del arte electrónico, aspectos creativos, sensoriales, adaptativos y exploratorios de quienes son parte de las experiencias que llevamos adelante.  Trabajamos con las comunidades que viven diferentes problemáticas o con problemas específicos que identificamos o que plantea una institución, colega, cliente. ";

    return (
        <div className="about2">
            <div className=" b2">
                {
                    preguntas.map((e,i) => {
                        var colores = ["#ADADAD", "#3B3B3B", "#EDEDED","#FAFAFA","#D4D4D4",];
                        var numColor = Math.round(Math.random() * 5);

                        var currentP = e.node.pregunta
                        var currentD = Math.floor(Math.random() * (40 - 15) + 15);
                        var currentC = colores[numColor];
                        var currentS = Math.floor(Math.random() * (7 - 3) + 3);
                        return(
                            <Preguntas key={`pregunta${i}`} dur={`${currentD}s`} fSize={`${currentS}vh`} cCaption={currentP} bgColor={""} txColor={currentC}/>
                        )
                    })
                }
            </div>
            
        </div>
    );
}

export default About2;
