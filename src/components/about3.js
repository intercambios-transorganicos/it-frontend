import React, {UseEffect, useStare} from 'react';
import InfoExpandedx2 from './infoExpandedx2'
import Animrandompath from './animrandompath'

const About3 = () => {

    var descripcion ="El paradigma de la complejidad, propone Stubrin (2013), se plantea como una superación del paradigma positivista y su tendencia a la fragmentación y el aislamiento para el estudio de un problema."
    var descripcion2 ="El paradigma de la complejidad implica hacer una identificación integral del problema, para luego componer estrategias en equipo hacia el abordaje de diferentes preguntas y experimentos, implica un diseño pertinente a cada proyecto, propuesta, equipo, y procesos."
    
    
    return (
        <div className="about3">
            <div className="c_boxes c1"></div>
            <div className="c_boxes c2">
                <Animrandompath/>
            </div>
            <div className="c_boxes c3">
                <div className="about3_content">
                    <h1>Alejamiento del mundo del desarrollo de conocimiento, respecto del mundo social!</h1>
                </div>
            </div>
            <div className="c_boxes c4"></div>
            <div className="c_boxes c5"></div>
            <div className="c_boxes c6">
                <InfoExpandedx2 desc={descripcion} desc2={descripcion2} />
            </div>
            
        </div>
    );
}

export default About3;
