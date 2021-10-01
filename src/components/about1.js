import React from 'react';
import InfoExpanded from './infoExpanded'
import Apple_svg from './apple_svg'

const About1 = () => {

    var titulo = "Somos un equipo ...";
    var descripcion ="Desarrollamos interfaces interactivas que permitan incorporar nuevos medios y tecnologías al ámbito de la salud y la educación por medio de estrategias inclusivas. . ."
    return (
        <div className="about1">
            <div className="a_boxes a1"></div>
            <div className="a_boxes a2">
                <Apple_svg/>
            </div>
            <div className="a_boxes a3"></div>
            <div className="a_boxes a4">
                <InfoExpanded titulo={titulo} descripcion={descripcion} />
            </div>
            <div className="a_boxes a5"></div>
            <div className="a_boxes a6"></div>
            
        </div>
    );
}

export default About1;
