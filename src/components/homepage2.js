import React from 'react';

const Homepage2 = () => {

    var video_src = "https://res.cloudinary.com/intercambios-transorganicos/video/upload/v1632864852/teaser_2017_web_5b9e997ee7.mp4";
    return (
        <div className="homepage2">
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
