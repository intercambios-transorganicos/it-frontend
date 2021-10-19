import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons'


const InfoExpandedx2 = (props) => {

    var[desc, setDesc] = useState(null);
    var[desc2, setDesc2] =useState(null);
    
    
    useEffect(() =>{
        setDesc(props.desc);
        setDesc2(props.desc2);
    },[props])

    return (
        <div className="info_">
            <div className="expandIconContainer">
            <FontAwesomeIcon className="expandIcon" icon={faExpandArrowsAlt} size="2x"  />
            </div>
           <div className="content columns">
                <div className="column">
                    {desc}
                </div>
                <div className="column">
                    {desc2}
                </div>
           </div>
        </div>
    );
}

export default InfoExpandedx2;
