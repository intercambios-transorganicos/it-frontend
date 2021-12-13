import React, { useState } from 'react';
import "./modalVideos.scss"
import VideoWControls from './videoWControls'

const ModalVideos = ({ setUrl, url, active, setActive }) => {

  let [stop, setStop] = useState(false);
  let clase = active ? "modalVideos modal is-active" : "modalVideos modal";

  function handleClose(){
    setActive(false);
    console.log(active)
    setStop(true);
  }

  return (
    <div className={clase}>
      <div className="modal-background"></div>

      <div className="videoModalContent ">
        <VideoWControls stop={stop} setStop={setStop} setUrl={setUrl} url={url} active={active} />
      </div>

      <button onClick={handleClose} className="modal-close is-large" aria-label="close"></button>
    </div>
  );
}

export default ModalVideos;