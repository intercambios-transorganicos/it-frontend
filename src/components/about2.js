import React from 'react';
import InfoExpanded from './infoExpanded'
import Preguntas from './preguntas'

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
            <div className="b_boxes b1">
            </div>
            <div className="b_boxes b2">
                <Preguntas dur={"50s"} fSize={80} cCaption={pregunta1} bgColor={""} txColor={"#ADADAD"}/>
                <Preguntas dur={"30s"} fSize={100} cCaption={pregunta2} bgColor={""} txColor={"#3B3B3B"}/>
                <Preguntas dur={"40s"} fSize={110} cCaption={pregunta3} bgColor={""} txColor={"#EDEDED"}/>
                <Preguntas dur={"30s"} fSize={60} cCaption={pregunta4} bgColor={""} txColor={"#FAFAFA"}/>
                <Preguntas dur={"20s"} fSize={120} cCaption={pregunta5} bgColor={""} txColor={"#D4D4D4"}/>
                <Preguntas dur={"40s"} fSize={40} cCaption={pregunta6} bgColor={""} txColor={"#ADADAD"}/>
                {/* <div className="about2_content">
                    <h1 className="about2_tituloUp">NUESTRO</h1>
                    <h1 className="about2_tituloDw">OBJETIVO</h1> 
                </div>*/}
            </div>
            <div className="b_boxes b3"></div>
            <div className="b_boxes b4"></div>
            <div className="b_boxes b5">
                <InfoExpanded titulo={titulo} descripcion={sub} modalT={modalT} modalP={modalP}  />
            </div>
            <div className="b_boxes b6"></div>
            
        </div>
    );
}

export default About2;
