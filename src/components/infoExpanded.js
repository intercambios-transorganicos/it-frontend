import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons'


const InfoExpanded = (props) => {

    var[open, setOpen]=useState(false);
    var clase = open? "modal is-active" : "modal";

    function handleclick(){
        //props.funpass();
        setOpen(true);
    }

    function handleClose(){
        setOpen(false);
    }
 

    return (
        <div style={{height:"100%"}}>
        <div className={clase}>
            <div className="modal-background"></div>
            <div className="modal-content">
                <div className="infoExpandedContent">
                <h1 className="title">{props.modalT}</h1>
                <p>{props.modalP}</p>
                </div>
            </div>
            <button onClick={handleClose} className="modal-close is-large" aria-label="close"></button>
        </div>

        <div onClick={handleclick} className="info_" style={{backgroundColor : props.bgColor}}>
                    <div  onClick={handleclick} className="expandIconContainer">
                    <FontAwesomeIcon className="expandIcon" icon={faExpandArrowsAlt} size="2x"  />
                    </div>
                    <div className="content ">
                    <h1>{props.titulo}</h1>
                    <p>{props.descripcion}</p>                    
                    </div>
                </div>
        </div>
    );
}

export default InfoExpanded;
