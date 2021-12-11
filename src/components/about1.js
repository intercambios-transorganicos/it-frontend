import React, {useState} from 'react'
import InfoExpanded from './infoExpanded'
import "./about1.scss";
import A1 from './a1'
//import Modal from './modal'

const About1 = () => {
    var[hovered, setHovered] = useState(false);
  
    function handleHover(){
        setHovered(true);
    }

    function handleLeave(){
        setHovered(false);
    }

   //AMARILLO
    var titulo = "Somos un programa de investigacion dedicado al desarrollo de interfaces interactivas !";
    var descripcion =" IT se erige sobre el perfíl híbrido de Gala Lucía González Barrios, que es licenciada en Artes Electrónicas (Universidad Nacional de Tres de Febrero) y se ha formado en Neurorrehabilitación Transdisciplinaria (Universidad del Museo Social Argentino), Música (Colegio Juan Pedro Esnaola) y Arteterapia (Primera Escuela Argentina de Arteterapia).";

    //ModalT
    var modalT = "Nos interesa la colaboración interdisciplinar y el estudio riguroso de las perspectivas particulares de cada disciplina interviniente!";
    var modalP = "Creemos que debemos entrenar una mirada integral sobre lo que estudiamos y sobre lo que queremos operar, y esto implica también, aproximarnos con nuestra humanidad y subjetividad. A lo largo del tiempo, muchas personas especialistas en distintas áreas del campo de la salud, de la tecnología, la ciencia y el arte, se han sumado al objetivo de optimizar y mejorar aspectos funcionales de ciertas tecnologías teniendo en común, un trabajo de posicionamiento filosófico respecto del cuerpo que implica siempre el empoderamiento de las personas cuyos derechos han sido vulnerados o que poseen algún tipo de discapacidad, promoviendo la diversidad, la noción de cuerpo expandido y, en el caso de quienes integramos Intercambios Transorgánicos,  la posibilidad cyborg post-humanista.";




    return (
        <div id="about-1" className="about1">
            

            <div className="a_boxes a1" >
                
            </div>
            
            <div className="a_boxes a2" onMouseEnter={handleHover} onMouseLeave={handleLeave}>
                <A1 action={hovered} />
            </div>

            <div className="a_boxes a3">
               
            </div>

            <div className="a_boxes a4">
               {/* <AppleSvg action="true" /> */}
               
            </div>

            <div className="a_boxes a5">
                 <InfoExpanded titulo={titulo} descripcion={descripcion} bgColor={"#eeeeee"}  modalT={modalT} modalP={modalP}  />
            </div>

            <div className="a_boxes a6"></div>
            
        </div>
        
    );
}

export default About1;
