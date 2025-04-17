import React, { useState, useEffect } from 'react';
import {Link} from "gatsby";
import {StaticImage} from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleXmark} from "@fortawesome/free-regular-svg-icons"
import { faMap, faEnvelope,faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FormOpenContextUse } from '../Contexts/FormOpenContext';
import AnimatedVisibility from './AnimatedVisibility';
import MailForm from './MailForm';
import Map from './Map';
import './footerV2Style.scss';


const FooterV2 = () => {
    const { formOpen, setFormOpen } = FormOpenContextUse();
    
    // // console.log(formOpen)
    const [showMap, setShowMap] = useState(false);

    const showingMail = () => {
        if(formOpen){
            setFormOpen(false);

        } else{
            setFormOpen(true);
            setShowMap(false);
        }
    }

    const showingMap = () => {
        if(showMap){
            setShowMap(false);

        } else{
            setShowMap(true);
            setFormOpen(false);
        }
    }

    const[click, setClick] = useState(false);
    function handleClick(){
        setFormOpen(false)
        setClick(!click)
        // // console.log(click)
    }

    const[enter, setEnter] = useState(false)

    function handleEnter(){
        setEnter(true)
        // console.log("enter")
    }

    function handleLeave(){
        setEnter(false)
        // console.log("leave")
    }

    useEffect(()=>{
        // console.log(formOpen)
        setClick(formOpen)
    },[formOpen])


    return (
        <div 
        style={{
            height:click?"100vh":"0vh"
        }}
        className='footerV2 row p-0 justify-content-center'
        >

            <div 
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            onClick={handleClick} 
            className="comunicacionIcon" >
                <FontAwesomeIcon size={"2x"}  color={enter?"#7c428c":"white"} icon={click?faCircleXmark:faCommentDots} />
            </div>
            
            

            <div className='logo my-2'>
                <StaticImage 
                   src= "../images/logoit_it.png" 
                   alt="Logo Intercambios Transorganicos"
                   layout = "constrained"
                />
            </div>

            <ul className='col-10 col-xxl-11 redes d-flex flex-row justify-content-center'>
                <li className='m-3'><Link to="https://www.instagram.com/intercambios_transorganicos/"> <FontAwesomeIcon icon={faInstagram}/> </Link></li>
                <li onClick={showingMail} className='m-3'><FontAwesomeIcon icon={faEnvelope}/></li>
                <li onClick={showingMap} className='m-3'><FontAwesomeIcon icon={faMap}/></li>
                <li className='m-3'><Link to="https://www.youtube.com/channel/UC2ifoKIRdmPADvml5T212gA"> <FontAwesomeIcon icon={faYoutube}/> </Link></li>
            </ul>

            <div id='mailForm' className='col-md-7 col-xl-6 linea-cuadro row p-0 justify-content-center'>
                <AnimatedVisibility visible={formOpen}>
                    <MailForm/>
                </AnimatedVisibility>

                <AnimatedVisibility visible={showMap}>
                    <Map/>
                </AnimatedVisibility>
            </div>

            <ul className='grupLinks  col-12 col-sm-11 col-md-10 col-xxl-11 px-5 secciones d-flex flex-row justify-content-between'>
                <li><Link to="/nosotres">Nuestro equipo</Link></li>
                <li><Link to="/proyectos02">Proyectos</Link></li>
                <li><Link to="/publicaciones02">Publicaciones</Link></li>
                <li><Link to="/actividades02">Actividades</Link></li>
            </ul>
            
            <div className='col-7 creditos'>
                <span>Es un proyecto de Gala Lucía Gonzalez Barrios.</span>
            </div>
        </div>
    )
}

export default FooterV2