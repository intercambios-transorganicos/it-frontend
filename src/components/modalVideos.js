import React, {useState, useEffect} from 'react';
import VideoWControls from './videoWControls'

const ModalVideos = ({ url, active, setActive }) => {

  let [stop, setStop] = useState(false);
  let clase = active ? "modalVideos modal is-active" : "modalVideos modal";

  function handleClose(){
    setActive(false);
    setStop(true);
  }

  return (
    <div className={clase}>
      <div className="modal-background"></div>

      <div className="videoModalContent modal-content">
        <VideoWControls stop={stop} setStop={setStop} url={url} active={active} />
      </div>

      <button onClick={handleClose} className="modal-close is-large" aria-label="close"></button>
    </div>
  );
}

export default ModalVideos;