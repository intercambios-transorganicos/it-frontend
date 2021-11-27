import React, {useState, useEffect, useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { faPauseCircle } from '@fortawesome/free-solid-svg-icons'
import useVideoquery from '../hooks/useVideoQuery'
//import ReactPlayer from 'react-player'

const Videowcontrols = (props) => {

    const[play, setPlay] = useState(null);
    var[timer, setTimer] = useState(0);
    var[stop, setStop] = useState(null);
    var[urlNum, defineUrlNum ] = useState(null);
    var[urlObj, defineUrlobj] = useState(props.url);
    const {playlist} = useVideoquery();


    var video_src = "https://res.cloudinary.com/intercambios-transorganicos/video/upload/v1635455684/portada_it_2021_5d6d2493d2.mp4";
    var videoRef = useRef(null);

    function handlePause(){
      setPlay(false);
      console.log('pause');
    }

    function handlePlay(){
      setPlay(true)
      console.log('play');
    }

    useEffect(()=>{
      if(play === true){
        videoRef.current.play();
        
      }else{
        videoRef.current.pause();
      }
      
    },[play]);

    useEffect(() =>{
      if(stop === true){
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }

    },[stop])

    //TIMER
    useEffect(()=>{ 
      var timerx = setInterval(() =>setTimer(videoRef.current.currentTime), 10)
      return function cleanup(){
        clearInterval(timerx);
        //console.log(timer);
      }
    })

    //PROPRS

    useEffect(()=>{
      setPlay(props._play);
    },[props._play]);
    
    useEffect(()=> {
      setStop(props._stop);
      console.log(props._stop);

    }, [props._stop]);

    useEffect(() =>{

      defineUrlNum(props.url);
      console.log(urlNum);
      console.log(typeof urlNum);
     
    },[props.url]);

    
    //URL

    useEffect(() =>{ 
      defineUrlobj(playlist[urlNum]);
      console.log(playlist);
      console.log(urlObj)
    },[urlNum])

                      
    return (
        <div>
            <div className="vControls">
            <FontAwesomeIcon onClick={handlePause} className="controlIcon" icon={faPauseCircle} size="2x"  />
            <FontAwesomeIcon onClick={handlePlay} className="controlIcon" icon={faPlayCircle} size="2x"  />
            </div>
            <div className="timecode">
              <h1>{timer}</h1>
            </div>
             <video
                  ref={elem =>{videoRef.current = elem}}
                  className="videoReel"
                  height="100%"
                  width="100%"
                  loop
                  muted
                  autoPlay
                >
                  <source
                    src={video_src}
                    type="video/mp4"
                  />
                </video> 
        </div>
    );
}

export default Videowcontrols;
