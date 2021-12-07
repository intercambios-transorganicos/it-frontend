import React, {useEffect, useState, useRef} from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import PathRaiz from './pathRaiz'
import ModalVideos from './modalVideos'

export default function Homepage() {

  let [url, setUrl] = useState(null);
  let [active, setActive] = useState(false);

  return (
      <div className="homepage" >
        <PathRaiz setActive={setActive} setUrl={setUrl} url={url} />
        {
          active?
            <ModalVideos setActive={setActive} active={active} url={url} />
            :
            <></>
        }
        <AnchorLink href="#about-1">
          
          <FontAwesomeIcon className="downIcon" icon={faArrowDown} size="3x"  />
          
        </AnchorLink>
      
      </div>
  )
}