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
    

    var[desc, setDesc] = useState(null);
    var[desc2, setDesc2] =useState(null);
    var[modalT, setModalT] = useState(null);
    var[modalP, setModalP] = useState(null);
    useEffect(() =>{
        setDesc(props.desc);
        setDesc2(props.desc2);
        setModalP(props.modalP);
        setModalT(props.modalT);
    },[props])

    return (
        <div>
            
        <div className={clase}>
            <div className="modal-background"></div>
            <div className="modal-content">
                <div className="content_container">
                <h1 className="title">{modalT}</h1>
                <p>{modalP}</p>
                </div>
            </div>
            <button onClick={handleClose} className="modal-close is-large" aria-label="close"></button>
        </div>
        
        <div className="info_">
            <div onClick={handleclick}  className="expandIconContainer">
            <FontAwesomeIcon className="expandIcon" icon={faExpandArrowsAlt} size="2x"  />
            </div>
           <div className="content columns">
                <div className="column">
                    <p>{desc}</p>
                </div>
                <div className="column">
                    <p>{desc2}</p>
                </div>
           </div>
        </div>

        </div>
    );
}

export default InfoExpandedx2;
