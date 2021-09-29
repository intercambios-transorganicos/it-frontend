import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons'


const InfoExpanded = () => {
    return (
        <div className="info_">
                    <div className="expandIconContainer">
                    <FontAwesomeIcon className="expandIcon" icon={faExpandArrowsAlt} size="2x"  />
                    </div>
                    <div className="content ">
                    <h1>Somos un equipo ...</h1>
                    <p>Desarrollamos interfaces interactivas que permitan incorporar nuevos medios y tecnologías al ámbito de la salud y la educación por medio de estrategias inclusivas. . .</p>
                    
                    </div>
                </div>
    );
}

export default InfoExpanded;
