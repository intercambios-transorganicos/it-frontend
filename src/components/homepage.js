import React, {useEffect, useState, useRef} from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import PathRaiz from './pathRaiz'
import ModalVideos from './modalVideos'

export default function Homepage() {
  var[movie, setMovie] = useState(null);
  var [active, setActive] = useState(false);
  function setModal(ac){
    setActive(ac);
    //console.log(active)
  }

  function setUrl(num){
    setMovie(num)
  }
  

    return (
        <div className="homepage" >
          <PathRaiz modal={setModal} seturl={setUrl} /> 
          <ModalVideos modal={setModal} isActive={active} url={movie} /> 
          <AnchorLink href="#about-1">
            
            <FontAwesomeIcon className="downIcon" icon={faArrowDown} size="3x"  />
           
          </AnchorLink>
       
        </div>
    )
}
