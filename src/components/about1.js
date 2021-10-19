import React, {useState} from 'react';
import {Controller, Scene} from 'react-scrollmagic'
import {Tween, Timeline} from 'react-gsap'
import InfoExpanded from './infoExpanded'
import AppleSvg from './apple_svg'
import A1 from './a1'

const About1 = () => {
    var[isHover, setHover] = useState(false);

    function handleHover(){
        setHover(true);
    }
    function handleLeave(){
        setHover(false);
    }

    var titulo = "¿Que hay “más allá” de la divulgación científico-técnica?";
    var descripcion ="Debemos generar una ampliación en la cultura del desarrollo de conocimiento apuntando hacia la producción de nuevos métodos, ideas y formas de pensar y expresar narrativas sobre el mundo. "
    return (
        <div className="about1">
            <div className="a_boxes a1" onMouseEnter={handleHover} onMouseLeave={handleLeave}>
                <A1 action={isHover} />
            </div>
            <div className="a_boxes a2">
                <AppleSvg action="true" />
            </div>
            <div className="a_boxes a3">
            <InfoExpanded titulo={titulo} descripcion={descripcion} />
            </div>
            <div className="a_boxes a4">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <rect width={"600%"} height={"600%"} fill="blue" transform="rotate(-45)"/>
                    <circle className="svgA3_circle" cx={"50%"} cy={"50%"} r="50%" fill={"orange"} />


                </svg>
            </div>
            <div className="a_boxes a5"></div>
            
        </div>
    );
}

export default About1;
