import React, {useState, useEffect,useRef} from "react"
import {Tween, Timeline} from 'react-gsap'

const Menu = ({style}) => {
    var [playstate, setPlaystate] = useState(false)
  

    useEffect(() =>{
        setPlaystate(style);
        console.log(playstate);
    },[style])

    return (
    <div className="menu_container">
    
        <Tween
          from={{
              
              top: "35%", 
              left: "44%",
              scale: 0
          }}
          
          stagger={0.2}
          ease =" expo.out"
          playState={playstate? "play" : "reverse"}
        > 
            <div className="tab">
            <h1>Nosotros</h1>
            </div>
            <div  className="tab">
                <h1>Proyectos</h1>
            </div>
            <div className="tab">
                <h1>Novedades</h1>
            </div>
            <div className="tab">
                <h1>Agenda</h1>
            </div>
        </Tween>
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
