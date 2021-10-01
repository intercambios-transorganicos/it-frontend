import React from 'react';
import InfoExpanded from './infoExpanded'

const About3 = () => {

    var descripcion ="Desarrollamos interfaces interactivas que permitan incorporar nuevos medios y tecnologías al ámbito de la salud y la educación por medio de estrategias inclusivas. . ."
    return (
        <div className="about3">
            <div className="c_boxes c1"></div>
            <div className="c_boxes c2"></div>
            <div className="c_boxes c3">
                <div className="about3_content">
                    <h1>Extendiendo nuestro aporte al plano educativo!</h1>
                </div>
            </div>
            <div className="c_boxes c4"></div>
            <div className="c_boxes c5"></div>
            <div className="c_boxes c6">
                <InfoExpanded titulo="" descripcion={descripcion} />
            </div>
            
        </div>
    );
}

export default About3;
