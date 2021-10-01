import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons'


const InfoExpanded = (props) => {

    var[titulo, setTitulo] = useState(null);
    var[desc, setDesc] =useState(null);
    
    useEffect(() =>{
        setTitulo(props.titulo);
        setDesc(props.descripcion);
    },[props])

    return (
        <div className="info_">
                    <div className="expandIconContainer">
                    <FontAwesomeIcon className="expandIcon" icon={faExpandArrowsAlt} size="2x"  />
                    </div>
                    <div className="content ">
                    <h1>{titulo}</h1>
                    <p>{desc}</p>                    
                    </div>
                </div>
    );
}

export default InfoExpanded;
