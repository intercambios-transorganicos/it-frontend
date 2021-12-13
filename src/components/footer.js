import React from 'react';
import {Link} from "gatsby"
import {StaticImage} from 'gatsby-plugin-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMap, faEnvelopeSquare,faEnvelope, faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import "./footer.scss"

const Footer = () => {
    return (
        <div className=" footer" >
            <div className="columns subscripcion">
                <div className=" column is-8" >
                    <div className="content contentSub" >
                    <h1>SUBSCRIBETE!</h1>
                    <h2>Para recibir las ultimas noticias</h2>
                    <div className="field has-addons" >
                        <div className="control has-icons-left emailSub" >
                          <input className="input" type="text" placeholder="email"/>
                            <span class="icon is-small is-left">
                            <FontAwesomeIcon  size="1x" icon={faEnvelopeSquare} />
                            </span>
                        </div>
                        <div className="control" >
                          <button class="button enviarSub" ><FontAwesomeIcon  size="1x" icon={faPaperPlane} /></button>
                        </div>
                    </div>
                    </div>
                    
                </div>
                <div className="column menuFoot" >
                    <div className="content has-text-centered" >
                        <div className="foot-list" >
                            <Link to="/nosotres" ><div className="foot-list-item" ><h2>Nuestro equipo</h2></div></Link>
                            <Link to="/proyectos" ><div className="foot-list-item" ><h2>Proyectos</h2></div></Link>
                            <Link to="/publicaciones" ><div className="foot-list-item" ><h2>Publicaciones</h2></div></Link>
                            <Link to="/actividades" ><div className="foot-list-item" ><h2>Actividades</h2></div></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="footer-image-content">
                   <StaticImage 
                   src= "../images/logoit_it.png" 
                   alt="A dinosaur"
                   layout = "CONSTRAINED"
                   className="footerImgWrapper"
                   />
                   
                </div>
            </div>
            <div className=" icons-column">
                <div className="footer-icons-content">
                <Link to="https://www.facebook.com/intercambiostransorganicos" ><FontAwesomeIcon  className="footer-icons" icon={faFacebook} /></Link>
                <Link to="https://www.instagram.com/intercambios_transorganicos/"><FontAwesomeIcon  className="footer-icons" icon={faInstagram} /></Link>
                <Link to="" ><FontAwesomeIcon  className="footer-icons" icon={faEnvelope} /></Link>
                <Link ><FontAwesomeIcon   className="footer-icons" icon={faMap} /></Link>
                </div>
                <h1>Es un proyecto de Gala Lucia Gonzalez Barrios.</h1>
            </div>
            
        </div>
    );
}

export default Footer;
