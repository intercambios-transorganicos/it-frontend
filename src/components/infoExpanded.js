import React, {useState, useEffect} from 'react';
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
    
    var[desc, setDesc] =useState(null);
    var[titulo, setTitulo] = useState(null);
    var[modalT, setModalT] = useState(null);
    var[modalP, setModalP] = useState(null);
    useEffect(() =>{
        setTitulo(props.titulo);
        setDesc(props.descripcion);
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
                    <div  onClick={handleclick} className="expandIconContainer">
                    <FontAwesomeIcon className="expandIcon" icon={faExpandArrowsAlt} size="2x"  />
                    </div>
                    <div className="content ">
                    <h1>{titulo}</h1>
                    <p>{desc}</p>                    
                    </div>
                </div>
        </div>
    );
}

export default InfoExpanded;
