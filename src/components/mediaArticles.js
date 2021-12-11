import React from 'react';
import "./mediaArticles.scss";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import loadable from "@loadable/component"
import TinySlider from "tiny-slider-react"

const MyLoadable2 = loadable(() => import(TinySlider));

const Mediaarticles = ({images}) => {

    var localImages = images
    const settings = {
      
        items : 1,
        slideBy : 1,
        autoplay: true,
        lazyload : true,
        nav: false,
        controlsPosition : "bottom",
        autoplayButtonOutput: false,
        mouseDrag: true,
        rewind : true, 
        
    };


    return (
        // <GatsbyImage image={localImg} />
        <div className="articleSliderContainer" >
            <MyLoadable2 settings={settings} >
            
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
        </MyLoadable2>
        </div>
    );
}

export default Mediaarticles;
