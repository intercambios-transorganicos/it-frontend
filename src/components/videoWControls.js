import React, {useState, useEffect, useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { faPauseCircle } from '@fortawesome/free-solid-svg-icons';
import "./videoWControls.scss"
import useVideoquery from '../hooks/useVideoQuery';

const VideoWControls = ({ stop, setStop, setUrl, url }) => {

  // VARIABLES Y HOOKS
    // QUERY DEL VIDEO, TRAIGO PLAYLIST
    const { playlist } = useVideoquery();

    //  VIDEOS
    let video_src = "https://res.cloudinary.com/intercambios-transorganicos/video/upload/v1635455684/portada_it_2021_5d6d2493d2.mp4";
    let videoRef = useRef();

  	// // TIMER
    // const [timer, setTimer] = useState(0);

    // DEFINIR URL
    const [videoSelect, setvideoSelect] = useState('');


  // FUNCIONES
    //PLAY
    const handlePlay = () =>{
      videoRef.current.play();
    }

    // PAUSA
    const handlePause = () =>{
      videoRef.current.pause();
    }

    // STOP
    const handleStop = () =>{
      if(stop === true){
        videoRef.current.currentTime = 0.2;
        setStop(false);
      }
    }

    // VIDEO ELEGIDO
    const selectingVideo = () =>{
     // console.log(process.env.API_URL);
   
      let newVideoSelect = playlist[url];
      var api_url = "";
      if(process.env.NODE_ENV == "production"){
        api_url = "https://185.53.129.158:1337";
        
      }else if(process.env.NODE_ENV == "development"){
        api_url = "http://localhost:1337";
      }
      setvideoSelect(api_url + newVideoSelect.url);
    }

  //EFECTOS

  useEffect(() =>{
    selectingVideo();
  },[url]); // Define URL al renderizarse el componente y por cada cambio de URL

  useEffect(() =>{ 
    console.log(url)
  },[url]);

  useEffect(() =>{ 
    console.log(videoSelect);
  },[videoSelect]);
  handleStop();
         
  
  return (
    <>
    {
      videoSelect?
        <div>
          <div className="vControls">
            <FontAwesomeIcon onClick={handlePause} className="controlIcon" icon={faPauseCircle} size="2x"  />
            <FontAwesomeIcon onClick={handlePlay} className="controlIcon" icon={faPlayCircle} size="2x"  />
          </div>

          {/* <div className="timecode">
            <h1>{timer}</h1>
          </div> */}

          <video
            ref={videoRef}
            className="videoReel"
            height="100%"
            width="100%"
            loop
            muted
            autoPlay
            >
              <source
                src={videoSelect}
                type="video/mp4"
              />
          </video> 
        </div>
        :
        <h4>Upss! Algo salió mal...</h4>
    }
    </>
  );
}

export default VideoWControls;