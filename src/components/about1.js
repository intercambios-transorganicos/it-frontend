import React, {useState} from 'react'
import InfoExpanded from './infoExpanded'
import AppleSvg from './apple_svg'
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
    var titulo = "Un eje puesto en la posibilidad cyborg post-humanista";
    var descripcion ="Aquí, el trabajo transdisciplinario, se suma al objetivo de optimizar y mejorar aspectos funcionales de ciertas tecnologías, un trabajo de posicionamiento filosófico respecto del cuerpo";

    //ModalT
    var modalP = "Nuestra motivacion es generar nuevas formas de producción de conocimiento “más allá” del desarrollo de obra. Mediante el estudio riguroso de las perspectivas particulares de diferentes disciplinas y con la participación de profesionales que se comprometen con su formación y actualización constante. Aquí, el trabajo transdisciplinario, se suma al objetivo de optimizar y mejorar aspectos funcionales de ciertas tecnologías, un trabajo de posicionamiento filosófico respecto del cuerpo, el empoderamiento, la diversidad, la noción de cuerpo expandido y, en el caso de Intercambios Transorgánicos, un eje puesto en la posibilidad cyborg post-humanista IT se erige sobre la formación híbrida de Gala lucia Gonzalez Barrios entre un entrenamiento formal en Música, Arteterapia, Neurorrehabilitación Transdisciplinaria y Artes Electrónicas";
    var modalT = "¿Que hay “más allá” de la divulgación científico-técnica?";




    return (
        <div className="about1">
            

            <div className="a_boxes a1" onMouseEnter={handleHover} onMouseLeave={handleLeave}>
                <A1 action={hovered} />
            </div>
            
            <div className="a_boxes a2">
                <AppleSvg action="true" />
            </div>

            <div className="a_boxes a3">
            <InfoExpanded titulo={titulo} descripcion={descripcion} bgColor={"#eeeeee"}  modalT={modalT} modalP={modalP}  />
            </div>

            <div className="a_boxes a4">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <rect width={"600%"} height={"600%"} fill="#7c428c" transform="rotate(-45)"/>
                    <circle className="svgA3_circle" cx={"50%"} cy={"50%"} r="50%" fill={"#4ca899"} />


                </svg>
            </div>

            <div className="a_boxes a5"></div>
            
        </div>
    );
}

export default About1;
