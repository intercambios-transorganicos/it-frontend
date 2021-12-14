import React, { useState } from 'react';
import VideoWControls from './videoWControls'
import "./modalVideos.scss"

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
      <div className="modal-background">

        <div className="videoModalContent ">
          <VideoWControls stop={stop} setStop={setStop} setUrl={setUrl} url={url} active={active} />
        </div>
      </div>
      <button id="playlistClose" onClick={handleClose} className="modal-close is-large" aria-label="close"></button>
    </div>
  );
}

export default ModalVideos;