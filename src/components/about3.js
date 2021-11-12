import React, {useState, useEffect} from 'react';
import InfoExpandedx2 from './infoExpandedx2'
import Animrandompath from './animRandomPath'
import ItIso from './it_iso'

const About3 = () => {

    var descripcion2 ="Se plantea como una superación del paradigma positivista y su tendencia a la fragmentación y el aislamiento para el estudio de un problema."
    var descripcion ="El paradigma de la complejidad implica hacer una identificación integral del problema, para luego componer estrategias en equipo hacia el abordaje de diferentes preguntas y experimentos asi como un diseño pertinente a cada proyecto, propuesta, equipo, y procesos."
    var modalP = "La hiperespecialización disciplinar que describe Edgar Morin en Introducción al pensamiento complejo (1990) refleja cómo los problemas holísticos han tendido a ser compartimentados y fragmentados a los fines de hacer aportes precisos y pertinentes. Pero lo que no ha resultado sencillo, incluso hasta hoy, es la reintegración de los saberes en pos del holos al que pertenecen. Incluso se puede percibir un alejamiento del “mundo” del desarrollo de conocimiento, respecto del “mundo” social. La aspiración máxima de los proyectos que se realizan en Intercambios Transorgánicos no se trata del arte por el arte en sí mismo, sino de la circulación de obras, ideas, productos, procesos y el diseño de estrategias que buscan encontrar suelo en problemáticas sociales específicas." ;
    var modalT = "El Metodo VS la Estrategia.";

    var[icohovered, seticoHovered] = useState(false);
    function handleHover(){
        seticoHovered(true);
    }

    function handleLeave(){
        seticoHovered(false);
    }
    
    return (
        <div className="about3">
            <div className="c_boxes c1"></div>
            <div className="c_boxes c2"  onMouseEnter={handleHover} onMouseLeave={handleLeave}>
                <ItIso action={icohovered} />
            </div>
            <div className="c_boxes c3">
                <div className="about3_content">
                    <h1>El Paradigma de la complejidad</h1>
                </div>
            </div>
            <div className="c_boxes c4"></div>
            <div className="c_boxes c5">
                
            </div>
            <div className="c_boxes c6">
                <InfoExpandedx2 desc={descripcion} desc2={descripcion2} bgColor="#4ca899" modalT={modalT} modalP={modalP}  />
            </div>
            
        </div>
    );
}

export default About3;
