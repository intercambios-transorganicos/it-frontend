import React from 'react';
import {StaticImage} from 'gatsby-plugin-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown , faPhone, faMap} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div class="columns footer" >
            <div className="column">
                <div className="footer-image-content">
                   <StaticImage 
                   src= "../images/logoit_it.png" 
                   alt="A dinosaur"
                   />
                   <h1>Es un proyecto de Gala Lucia Gonzalez Barrios</h1>
                </div>
            </div>
            <div className="column icons-column">
                <div className="footer-icons-content">
                <FontAwesomeIcon  size="3x" className="footer-icons" icon={faFacebook} />
                <FontAwesomeIcon  size="3x" className="footer-icons" icon={faInstagram} />
                <FontAwesomeIcon  size="3x" className="footer-icons" icon={faPhone} />
                <FontAwesomeIcon  size="3x" className="footer-icons" icon={faMap} />
                </div>
            </div>
            
        </div>
    );
}

export default Footer;
