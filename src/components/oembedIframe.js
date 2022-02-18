import React from 'react';

const OembedIframe = ({videoData}) => {
    return (
        
        <div 
        //  VER Interweave
        dangerouslySetInnerHTML={{__html:videoData}}
        className="videoArticleContainer"
        >
        </div>     
    );
}

export default OembedIframe;
