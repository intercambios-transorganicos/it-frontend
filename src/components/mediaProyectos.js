import React from 'react';

import {Carousel} from "react-bootstrap"
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import "./mediaProyectos.scss"


//const MyLoadable3 = loadable(() => import("tiny-slider-react"));

const Mediaproyectos = ({imagenes}) => {
    var localImages = imagenes;
   
    return (
        <div className="proyectoSliderContainer">
            <Carousel >
                {
                    localImages.map((e, i) =>{
                        var currentImg = getImage(e.localFile);
                        //console.log(e.localFile);
                        return(
                            <Carousel.Item className="mediaProyectoSlide">
                                <GatsbyImage image={currentImg} key={i} alt={i} />
                            </Carousel.Item>
                        )
                        
                    })
                }
            </Carousel> 
            
        </div>
    );
}

export default Mediaproyectos;
