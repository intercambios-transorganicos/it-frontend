import React, {useEffect, useState, useRef} from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import PathRaiz from './pathRaiz'
import ModalVideos from './modalVideos'
import "./homepage.scss"

export default function Homepage() {

  let [url, setUrl] = useState(-1);
  let [active, setActive] = useState(false);

 // console.log(url)

  return (
      <div className="homepage" >
        <PathRaiz setActive={setActive} setUrl={setUrl} url={url} />
        {
          active?
            <ModalVideos setActive={setActive} active={active} setUrl={setUrl} url={url} />
            :
            <></>
        }
        <AnchorLink href="#about-1">
          
          <FontAwesomeIcon className="downIcon" icon={faArrowDown} size="3x"  />
          
        </AnchorLink>
      
      </div>
  )
}