import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons'


const InfoExpandedx2 = () => {
    return (
        <div className="info_">
            <div className="expandIconContainer">
            <FontAwesomeIcon className="expandIcon" icon={faExpandArrowsAlt} size="2x"  />
            </div>
           <div className="content columns">
                <div className="column">
                    <p>Desarrollamos interfaces interactivas que permitan incorporar nuevos medios y tecnologías al ámbito de la salud y la educación por medio de estrategias inclusivas. . .</p>
                </div>
                <div className="column">
                    <p>Desarrollamos interfaces interactivas que permitan incorporar nuevos medios y tecnologías al ámbito de la salud y la educación por medio de estrategias inclusivas. . .</p>
                </div>
           </div>
        </div>
    );
}

export default InfoExpandedx2;
