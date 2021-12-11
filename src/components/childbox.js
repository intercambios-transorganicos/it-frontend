import React, {useState, useEffect} from 'react'
import {Link} from "gatsby"
import "./childbox.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserEdit} from '@fortawesome/free-solid-svg-icons'

const Childbox = (props) => {

    var {autor, titulo, subtitulo, id} = props;
    

    return (
        <Link className="aArticle" to={`../../${id}`} >
            <div className="tile is-parent">
                <article className="article_box tile is-child box">
                    <div className="textcontent">
                        <h1>{titulo}</h1>          
                        <div className="autor">
                        <FontAwesomeIcon   size="1x" icon={faUserEdit} />
                        <h12 className="autorTitle" >{autor}</h12>
                        </div>
                    </div>
                </article>
            </div>
        </Link> 
    );
}

export default Childbox;
