import React, {useState, useEffect} from 'react';
import VideoWControls from './videoWControls'



const Homepage2 = (props) => {
var[open, setOpen] = useState(false);
var [stop, setStop] = useState(false);
var clase = open ? "modalVideos modal is-active" : "modalVideos modal";


function handleClose(){
  props.modal(false);
  setStop(true);
  //console.log(stop);
}

useEffect(()=>{
  setOpen(props.isActive);
  //console.log(props.isActive);
},[props.isActive])

useEffect(() =>{
  console.log("cambio props.url");
},[props.url])

    
    return (
        <div className={clase}>
          <div className="modal-background"></div>
          <div className="videoModalContent modal-content">
          
          <VideoWControls  _play={open} _stop={stop} url={props.url} />
                
            
          </div>
          <button onClick={handleClose} className="modal-close is-large" aria-label="close"></button>
        </div>
    );
}

export default Homepage2;
