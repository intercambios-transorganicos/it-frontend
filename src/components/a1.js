import React, {useEffect, useState, useRef} from 'react';
import gsap from "gsap"
import gal from '../images/gal.jpg'

const A1 = (props) => {
    var[active, isActive] = useState(null);
    var actors = useRef([]);
    var tl = useRef();

    useEffect(()=>{
        tl.current = gsap.timeline({});
        tl.current.from(actors.current[0], {r:0, duration: 1})
          .from(actors.current[1], {x:-400, duration: 1},"-=0.5")
          .from(actors.current[2], {width: "0%", height:"0%", duration: 1},"-=0.5")

    },[]);

    useEffect(()=>{
        isActive(props.action);
       
    },[props]);

    useEffect(()=>{
        //console.log(active)
        tl.current.reversed(active);
    },[active])

    
    return (
            <svg id="svgA1">
                <defs>
                    <pattern id="gal_pattern" x="0" y="0" patternUnits="userSpaceOnUse" height="800" width="800">
                        <image id="gal" x="60" y="-40" transform="scale(0.9)"  href={gal}></image>
                    </pattern>
                </defs>
                <circle id='top' cx={"50%"} cy={"50%"} r="50%" fill="url(#gal_pattern)"/>
                <circle ref={elem => {actors.current[0] = elem}} cx={"50%"} cy={"50%"} r="50%" fill={"pink"} />
                <rect ref={elem => {actors.current[1] = elem}} className="svgA1_rect" width={"50%"} height={"100%"} fill={"#7c428c"}/>
                <rect ref={elem => {actors.current[2] = elem}} className="svgA1_cuad" x={"65%"} y={"25%"} width={"50%"} height={"50%"} fill={"#04bf9d"}/>
                <text id="gal_g" x={"0%"} y={"100%"} fill={"#eeeeee"}>
                   G
                </text>
                <text id="gal_nombre" x={"15%"} y={"100%"} fill={"#eeeeee"}>
                   ala Lucia Gonzalez Barrios.
                </text>
            </svg>


    );
}

export default A1;
