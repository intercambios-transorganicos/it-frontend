import React from 'react';
import {Link} from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'
import "./presentacion.scss"

const Presentacion = ({titulo, desc}) => {
     
    return (
        <div className="box presentacion">
        <div className="content">
            <h1>{titulo}</h1>
            <div className="separador"></div>
            <p>{desc}</p>
          <div className="presButtons">
          <Link to="/nosotres" >
           <div className="links_press">
                 <div className="icon-centered">
                <FontAwesomeIcon 
                  size="1x" 
                  icon={faExternalLinkAlt} />
                 </div>
                <h2 className="" >Conoce a nuestro equipo</h2>
            </div></Link>
            <Link to="/proyectos" >
            <div className="links_press">
                 <div className="icon-centered">
                <FontAwesomeIcon 
                  size="1x" 
                  icon={faExternalLinkAlt} />
                 </div>
                <h2 className="" >Proyectos e investigacion</h2>
            </div>
            </Link>
          </div>
        </div>
        </div>
    );
}

export default Presentacion;
