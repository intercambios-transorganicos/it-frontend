import React, { useEffect,useRef} from "react"
import {Link} from "gatsby"
import {gsap} from 'gsap'

const Menu = ({click}) => {
    var tabs = useRef([]);
    var cont = useRef();

    useEffect(() =>{

        
    var tl = gsap.timeline({});
    tl.from(cont.current, {scale: 0, duration: 1})
      .from(tabs.current[0], {top: "35%", left: "44%", duration: 0.5}, "-=0.3")
      .from(tabs.current[1], {top: "35%", left: "44%", duration: 0.5}, "-=0.3")
      .from(tabs.current[2], {top: "35%", left: "44%", duration: 0.5}, "-=0.3")
      .from(tabs.current[3], {top: "35%", left: "44%", duration: 0.5}, "-=0.3")
      
        
    },[click])

    return (
    <div ref={elem => {cont.current = elem}} className="menu_container">
            <div ref={elem => {tabs.current[0] = elem}} className="tab">
            <Link to="/" > <h1>Proyectos</h1> </Link>
            </div>
            <div ref={elem => {tabs.current[1] = elem}}  className="tab">
            <Link to="/publicaciones" > <h1>Publicaciones</h1> </Link>
            </div>
            <div ref={elem => {tabs.current[2] = elem}} className="tab">
                <Link to="/" > <h1>Contacto</h1> </Link>
            </div>
            <div ref={elem => {tabs.current[3] = elem}} className="tab">
                <Link to="/nosotres" ><h1>Nosotres</h1></Link>
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
