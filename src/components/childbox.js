import React, {useState, useEffect} from 'react'
import {Link} from "gatsby"

const Childbox = (props) => {

    var {autor, titulo, subtitulo, id} = props;
    

    function handleEnter(){
        console.log("tile enter");
    }

    function handleLeave(){
        console.log("handle leave")
    }

    useEffect(()=>{
        
    })
    

    return (
        <Link className="aArticle" to={`/${id}`} >
            <article
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            className="itArticle tile is-child box">
                <div className="textcontent">
                    <h1>{titulo}</h1>          
                    <h1>{autor}</h1>
                </div>
            </article>
        </Link> 
    );
}

export default Childbox;
