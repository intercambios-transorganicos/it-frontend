import React, {useEffect, useState, useRef} from 'react';
import InfoExpanded from './infoExpanded'
import Preguntas from './preguntas'
import Bgimg from  '../images/Asset.png'

const About2 = () => {

    var titulo = "El eje temático que atraviesa todo lo que hacemos";
    var sub = "es el campo de la salud, entendido como un campo complejo nos permite observar los distintos niveles de la cultura, para proponer operaciones sobre ellos."

    var pregunta1 = "¿Cómo potenciar y expandir la transferencia de conocimientos a la población?";
    var pregunta2 = "¿¿Qué futuros imaginamos??";
    var pregunta3 = "¿Cómo imaginar otros modelos políticos, sociales, productivos?";
    var pregunta4 = "¿Cómo trascender la obra, el museo, el sistema del arte?";
    var pregunta5 = "¿Por qué es importante el arte para el futuro de la humanidad?";
    var pregunta6 = "¿Existen otras topologías que doten a las disciplinas artísticas de nuevas posibilidades de acción y producción?";

    var modalT = "";
    var modalP = "";
    return (
        <div className="about2">
            <div style={{
                backgroundImage: `url(${Bgimg})`,
                backgroundSize:"contain",
                backgroundAttachment:"fixed"
                }} 
                className="b_boxes b1">
            </div>
            <div className="b_boxes b2">
                <Preguntas dur={"40s"} fSize={80} cCaption={pregunta1} bgColor={""} txColor={"#ADADAD"}/>
                <Preguntas dur={"20s"} fSize={100} cCaption={pregunta2} bgColor={""} txColor={"#3B3B3B"}/>
                <Preguntas dur={"30s"} fSize={110} cCaption={pregunta3} bgColor={""} txColor={"#EDEDED"}/>
                <Preguntas dur={"20s"} fSize={60} cCaption={pregunta4} bgColor={""} txColor={"#FAFAFA"}/>
                <Preguntas dur={"10s"} fSize={100} cCaption={pregunta5} bgColor={""} txColor={"#D4D4D4"}/>
                <Preguntas dur={"30s"} fSize={40} cCaption={pregunta6} bgColor={""} txColor={"#ADADAD"}/>
                {/* <div className="about2_content">
                    <h1 className="about2_tituloUp">NUESTRO</h1>
                    <h1 className="about2_tituloDw">OBJETIVO</h1> 
                </div>*/}
            </div>
            <div className="b_boxes b3"></div>
            <div className="b_boxes b4">
                <svg width="100%" height="100%">
                <pattern id="p1" x="12.5" y="12.5" width="25" height="25"
                        patternUnits="userSpaceOnUse">
                    <circle fill="#eeeeee" cx="10" cy="10" r="10" />
                </pattern>
                <pattern fill="green" id="p2" x="12.5" y="12.5" width="50" height="50"
                        patternUnits="userSpaceOnUse">
                    <circle fill="#7c428c" cx="10" cy="10" r="10" />
                </pattern>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#p1)" />
                <rect x="0" y="0" width="100%" height="100%" fill="url(#p2)" />
                
                </svg>
            </div>
            <div className="b_boxes b5">
                <InfoExpanded titulo={titulo} descripcion={sub} bgColor="#eeeeee" modalT={modalT} modalP={modalP}  />
            </div>
            <div className="b_boxes b6"></div>
            
        </div>
    );
}

export default About2;
