import React from 'react'
import "./childbox.scss"
import {GatsbyImage, getImage} from "gatsby-plugin-image"

const Childbox = (props) => {

    var {imagen, titulo, subtitulo} = props;
    
    console.log(imagen);
    var currentImg = getImage(imagen);
    return (
            <div className="">
                <article className="article_box box">
                <GatsbyImage image={currentImg}  alt={"unalt"} />
                </article>
                    <div className="">
                        <h1 className="proTitle">{titulo}</h1>   
                        <h2 className="proSub">{subtitulo}</h2>       
                        
                    </div>
            </div>
    );
}

export default Childbox;
