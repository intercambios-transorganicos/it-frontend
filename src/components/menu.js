import React, { useEffect,useRef} from "react"
import {Link} from "gatsby"
import {gsap} from 'gsap'
import { FormOpenContextUse } from "../Contexts/FormOpenContext"
import "./menu.scss"

const Menu = ({click, handler}) => {
    const {setFormOpen } = FormOpenContextUse();

    var tabs = useRef([]);
    var cont = useRef();
    var tl = useRef();

    useEffect(() =>{
        
        tl.current = gsap.timeline({});
        tl.current.from(cont.current, {scale: 0, duration: 1})
        .from(tabs.current[0], {top: "35%", left: "44%", duration: 0.5}, "-=0.3")
        .from(tabs.current[1], {top: "35%", right: "44%", duration: 0.5}, "-=0.3")
        .from(tabs.current[2], {top: "35%", left: "44%", duration: 0.5}, "-=0.3")
        .from(tabs.current[3], {top: "35%", right: "44%", duration: 0.5}, "-=0.3")
        .from(tabs.current[4], {top: "35%", right: "44%", duration: 0.5}, "-=0.3")
      
        
    },[]);

    useEffect(() =>{
        tl.current.reversed(!click);
    },[click])

    function handleClick(){
        // console.log("handleContacto");
        handler(false)
        setFormOpen(true)
    }

    return (
    <div ref={elem => {cont.current = elem}} className="menu_container">
            <div ref={elem => {tabs.current[0] = elem}} className="tab">
            <Link to="/proyectos02" > <h1>Proyectos</h1> </Link>
            </div>
            <div ref={elem => {tabs.current[1] = elem}}  className="tab">
            <Link to="/publicaciones02" > <h1>Publicaciones</h1> </Link>
            </div>
            <div ref={elem => {tabs.current[2] = elem}} className="tab">
                <Link to="/actividades02" > <h1>Actividades</h1> </Link>
            </div>
            <div ref={elem => {tabs.current[3] = elem}} className="tab">
                <Link to="/nosotres" ><h1>Nosotres</h1></Link>
            </div>
            <div onClick={handleClick} ref={elem => {tabs.current[4] = elem}} className="tab">
                <h1>Contacto</h1>
            </div>

        <svg>
        <defs>
            <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
                <feColorMatrix in="name" mode="matrix"
                    values='1 0 0 0 0
                            0 1 0 0 0
                            0 0 1 0 0
                            0 0 0 30 -15'/>
                <feBlend in="SourceGraphic" />
            </filter>
        </defs>
    </svg>
    </div>
    );
}

export default Menu;
