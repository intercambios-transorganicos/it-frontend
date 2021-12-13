import React from 'react';
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import loadable from "@loadable/component"
//import TinySlider from "tiny-slider-react"

import {Carousel} from "react-bootstrap"
import "./mediaArticles.scss";
//const MyLoadable2 = loadable(() => import("tiny-slider-react"));

const Mediaarticles = ({images}) => {

    var localImages = images

    return (
        // <GatsbyImage image={localImg} />
        <div className="articleSliderContainer" >
            <Carousel>
            {
                localImages.map((e, i) => {
                    var currentImage = getImage(e.localFile);
                    console.log(e);
                    return (
                        <Carousel.Item key = {i}>
                            <GatsbyImage image={currentImage} alt="image" />
                        </Carousel.Item>
                    )
                })
            }
            </Carousel>
       
            {/* <MyLoadable2 settings={settings} >
            
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
        </MyLoadable2> */}
        </div>
    );
}

export default Mediaarticles;
