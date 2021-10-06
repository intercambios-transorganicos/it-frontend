import React from 'react';
import InfoExpanded from './infoExpanded'
import AppleSvg from './apple_svg'
import A1 from './a1'

const About1 = () => {

    var titulo = "Somos un equipo ...";
    var descripcion ="Desarrollamos interfaces interactivas que permitan incorporar nuevos medios y tecnologías al ámbito de la salud y la educación por medio de estrategias inclusivas. . ."
    return (
        <div className="about1">
            <div className="a_boxes a1">
                <A1 action="true" />
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
