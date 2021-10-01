import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'


const Homepage2 = () => {

    var video_src = "https://res.cloudinary.com/intercambios-transorganicos/video/upload/v1633028911/teaser_edit_8a6dad6fd4.mp4";
    return (
        <div className="homepage2">
          <FontAwesomeIcon className="downIcon" icon={faArrowDown} size="2x"  />
        
                <video
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

export default Homepage2;
