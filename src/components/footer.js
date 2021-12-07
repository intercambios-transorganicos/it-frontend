import React from 'react';
import {StaticImage} from 'gatsby-plugin-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMap, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div class=" footer" >
            <div className="columns subscripcion">
                <div className=" column is-8" >
                    <div className="content contentSub" >
                    <h1>SUBSCRIBETE!</h1>
                    <h2>Para recibir las ultimas noticias</h2>
                    <div className="field has-addons" >
                        <div className="control has-icons-left emailSub" >
                          <input className="input" type="text" placeholder="email"/>
                            <span class="icon is-small is-left">
                            <FontAwesomeIcon  size="1x" icon={faEnvelope} />
                            </span>
                        </div>
                        <div className="control" >
                          <button class="button enviarSub" >Enviar</button>
                        </div>
                    </div>
                    </div>
                    
                </div>
                <div className="column menuFoot" >
                    <div className="content has-text-centered" >
                        <div className="foot-list" >
                            <div className="foot-list-item" ><h2>Nuestro equipo</h2></div>
                            <div className="foot-list-item" ><h2>Proyectos</h2></div>
                            <div className="foot-list-item" ><h2>Publicaciones</h2></div>
                            <div className="foot-list-item" ><h2>Actividades</h2></div>
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
                <FontAwesomeIcon  className="footer-icons" icon={faFacebook} />
                <FontAwesomeIcon  className="footer-icons" icon={faInstagram} />
                <FontAwesomeIcon  className="footer-icons" icon={faPhone} />
                <FontAwesomeIcon  className="footer-icons" icon={faMap} />
                </div>
                <h1>Es un proyecto de Gala Lucia Gonzalez Barrios.</h1>
            </div>
            
        </div>
    );
}

export default Footer;
