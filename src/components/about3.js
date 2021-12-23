import React, {useState, useEffect} from 'react';
import "./about3.scss"
import InfoExpandedx2 from './infoExpandedx2'
import ItIso from './it_iso'

const About3 = () => {

    var titulo = "Nuestro Aporte"
    var descripcion ="La aspiración máxima de los proyectos que se realizan en Intercambios Transorgánicos no se trata del arte por el arte en sí mismo, sino de la circulación de obras, ideas, productos, procesos y el diseño de estrategias que buscan encontrar suelo en problemáticas sociales específicas" ;
    var descripcion2 ="Todo esto lo hacemos vinculando al MUNTreF con instituciones interesadas en integrar diversos medios y tecnologías a sus estrategias de trabajo."
    var modalT = "Porque queremos que el diálogo entre arte y ciencia sea realmente tangible.";
    var modalP = "Activamos conversaciones transdisciplinarias y exploraciones de campo que nos ofrezcan la matriz de datos que sustenta nuestra investigación. Así es como guiamos, reformulamos y expandimos continuamente nuestra perspectiva crítica sobre el uso validado de la tecnología en salud y educación.";
    var modalP2 = "Representamos a nuestra universidad y además consolidamos nuevos lazos con pares y organizaciones a través de conferencias, encuentros, exposiciones y workshops que nos llevaron a recorrer diversas ciudades e instituciones de América Latina y Europa.  "
    var modalP3 = "Nuestra misión es tan ambiciosa como inquietante. Nos interesa generar mayor empoderamiento de las personas con una discapacidad, colaborar en comprender la dimensión cultural de la salud. Aportar a las transformaciones sociales contemporáneas en torno a la valoración y conceptos de salud, alimentación, independencia personal, comunidad, soberanía tecnológica, soberanía sanitaria. ";
    var[icohovered, seticoHovered] = useState(false);
    function handleHover(){
        seticoHovered(true);
    }

    function handleLeave(){
        seticoHovered(false);
    }
    
    return (
        <div className="about3 columns">
            <div className="c_boxes  column"  onMouseEnter={handleHover} onMouseLeave={handleLeave}>
                <ItIso action={icohovered} />
            </div>
            
            <div className="c_boxes column">
            <InfoExpandedx2 titulo={titulo} desc={descripcion} desc2={descripcion2} bgColor="#7c428c" txColor={"#eeeeee"} modalT={modalT} modalP={modalP} modalP2={modalP2} modalP3={modalP3}/>
            </div>
         
        </div>
    );
}

export default About3;
