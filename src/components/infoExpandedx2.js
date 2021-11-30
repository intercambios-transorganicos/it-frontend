import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons'


const InfoExpandedx2 = (props) => {
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
        <div  style={{height:"100%"}}>
            
        <div className={clase}>
            <div className="modal-background"></div>
            <div className="modal-content">
                <div className="content_container">
                <h1 className="title">{props.modalT}</h1>
                <p>{props.modalP}</p>
                <p>{props.modalP2}</p>
                <p>{props.modalP3}</p>
                </div>
            </div>
            <button onClick={handleClose} className="modal-close is-large" aria-label="close"></button>
        </div>
        
        <div className="info_" style={{backgroundColor: props.bgColor}}>
            <div onClick={handleclick}  className="expandIconContainer">
            <FontAwesomeIcon className="expandIcon" icon={faExpandArrowsAlt} size="2x"  />
            </div>
           <div className="content columns">
                <div className="column">
                    <p>{props.desc}</p>
                </div>
                <div className="column">
                    <p>{props.desc2}</p>
                </div>
           </div>
        </div>

        </div>
    );
}

export default InfoExpandedx2;
