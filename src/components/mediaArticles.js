import React, {useEffect, useState} from 'react';
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import TinySlider from "tiny-slider-react"

const Mediaarticles = ({images}) => {

    var localImages = images
    const settings = {
        //container : ".cambionombrecontainer",
        
        axis:"vertical",
        items : 1,
        slideBy : 1,
        lazyload : true,
        nav: false,
        mouseDrag: true,
        rewind : true, 
        controls: false,
        responsive : {
            640:{
                items : 1,
                slideBy : 1,
            }
        }
    };

    return (
        // <GatsbyImage image={localImg} />
        <TinySlider settings={settings} >
            {
                localImages.map((e, i) => {
                    var currentImage = getImage(e.localFile);
                    console.log(e);
                    return (
                        <div key = {i}>
                            <GatsbyImage image={currentImage} alt="image" />
                        </div>
                    )
                })
            }
        </TinySlider>
    );
}

export default Mediaarticles;
