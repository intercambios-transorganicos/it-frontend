import React, {useEffect, useState, useRef} from 'react';
import InfoExpanded from './infoExpanded'
import Preguntas from './preguntas'
import PatternSvg from './patternSvg'

const About2 = () => {

    var titulo = "Nuestras preguntas de investigacion...";
    var sub = "Dedicamos un proceso de investigación transdisciplinaria a la comprensión del problema. Sobre la dimensión adquirida, imaginamos y a veces realizamos estrategias tecno-culturales para descubrir nuevas soluciones."

    var pregunta1 = "¿Cómo potenciar y expandir la transferencia de conocimientos a la población?";
    var pregunta2 = "¿¿Qué futuros imaginamos??";
    var pregunta3 = "¿Cómo imaginar otros modelos políticos, sociales, productivos?";
    var pregunta4 = "¿Cómo trascender la obra, el museo, el sistema del arte?";
    var pregunta5 = "¿Por qué es importante el arte para el futuro de la humanidad?";
    var pregunta6 = "¿Existen otras topologías que doten a las disciplinas artísticas de nuevas posibilidades de acción y producción?";

    var modalT = "Métodología";
    var modalP = "Nuestro enfoque crítico sobre los avances y las limitaciones de la tecnología funcional nos llevó a plantear la necesidad de producir dispositivos/interfaces que estimulen, por medio del lenguaje simbólico del arte electrónico, aspectos creativos, sensoriales, adaptativos y exploratorios de quienes son parte de las experiencias que llevamos adelante.  Trabajamos con las comunidades que viven diferentes problemáticas o con problemas específicos que identificamos o que plantea una institución, colega, cliente. ";
    return (
        <div className="about2">
            <div className="b_boxes b2">
                <Preguntas dur={"40s"} fSize={50} cCaption={pregunta1} bgColor={""} txColor={"#ADADAD"}/>
                <Preguntas dur={"20s"} fSize={80} cCaption={pregunta2} bgColor={""} txColor={"#3B3B3B"}/>
                <Preguntas dur={"30s"} fSize={60} cCaption={pregunta3} bgColor={""} txColor={"#EDEDED"}/>
                <Preguntas dur={"20s"} fSize={40} cCaption={pregunta4} bgColor={""} txColor={"#FAFAFA"}/>
                <Preguntas dur={"15s"} fSize={30} cCaption={pregunta5} bgColor={""} txColor={"#D4D4D4"}/>
                <Preguntas dur={"30s"} fSize={40} cCaption={pregunta6} bgColor={""} txColor={"#ADADAD"}/>
               
            </div>
            <div className="b_boxes b3"></div>
            <div className="b_boxes b4"></div>
            <div className="b_boxes b5">
                <InfoExpanded titulo={titulo} descripcion={sub} bgColor="#eeeeee" modalT={modalT} modalP={modalP}  />
            </div>
            <div className="b_boxes b6"></div>
            
        </div>
    );
}

export default About2;
