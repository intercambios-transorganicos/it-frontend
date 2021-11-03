import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import VideoWControls from './videoWControls'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Homepage2 = () => {

    var video_src = "https://res.cloudinary.com/intercambios-transorganicos/video/upload/v1635447576/teaser_edit_8a6dad6fd4.mpeg";
    
    return (
        <div className="homepage2">
          <AnchorLink href="#about-1">
            
            <FontAwesomeIcon className="downIcon" icon={faArrowDown} size="3x"  />
           
          </AnchorLink>
              <VideoWControls/>
                
            
        </div>
    );
}

export default Homepage2;
