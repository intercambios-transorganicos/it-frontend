import React from 'react';
import "./mediaProyectos.scss"
import loadable from "@loadable/component"
import TinySlider from "tiny-slider-react"
import {GatsbyImage, getImage} from "gatsby-plugin-image"


const MyLoadable3 = loadable(() => import(TinySlider));

const Mediaproyectos = ({imagenes}) => {
    var localImages = imagenes;
    const settings = {
        center:true,
        gutter: 50,
        nav: true,
        navPosition: "bottom",
        items : 1,
        slideBy : 1,
        autoplay: true,
        lazyload : true,
        controls: false,
        autoplayButtonOutput: false,
        mouseDrag: true,
        rewind : true, 
        responsive : {
            640:{
                items : 1,
                slideBy : 1,
                //fixedWidth : 600,
            }
        }
        
    };
    return (
        <div className="proyectoSliderContainer">
            <MyLoadable3 settings={settings} >
                {
                    localImages.map((e, i) =>{
                        var currentImg = getImage(e.localFile);
                        //console.log(e.localFile);
                        return(
                            <div className="mediaProyectoSlide">
                                <GatsbyImage image={currentImg} key={i} alt={i} />
                            </div>
                        )
                        
                    })
                }
            </MyLoadable3>
            
        </div>
    );
}

export default Mediaproyectos;
