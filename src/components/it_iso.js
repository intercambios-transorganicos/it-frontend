import React, {useState, useEffect, useRef} from 'react';
import gsap from 'gsap';
import "./it_iso.scss"

const ItIso = (props) => {
    var[active, isActive] = useState(null);
    var actors = useRef([]);
    var tl = useRef();

    useEffect(()=>{
        tl.current = gsap.timeline();
        tl.current.from(actors.current, {
        scale: 0, 
        duration: 1, 
        ease: "power1.inOut",
        stagger: {
          from: "center",
          amount: 1.5
        }
    })
    },[]);

      useEffect(()=>{
        isActive(props.action);
        //console.log(props.action);
    },[props]);

    useEffect(()=>{
        //console.log(active)
            tl.current.reversed(active);
    },[active])



    return (
        <svg className="it_iso" viewBox="-300 -200 1000 1000">
            <polygon ref={elem => {actors.current[0] = elem}} className="cls-1" points="0 202.43 0 557.28 74.48 599.7 74.48 244.85 0 202.43"/>
            <polygon ref={elem => {actors.current[1] = elem}} className="cls-2" points="0 202.43 73.48 160 146.97 202.43 74.22 245.59 0 202.43"/>
            <polygon ref={elem => {actors.current[2] = elem}} className="cls-2" points="74.22 245.59 146.97 202.43 146.97 557.28 74.22 599.28 74.22 245.59"/>
            <polygon ref={elem => {actors.current[3] = elem}} className="cls-1" points="0 42.43 0 137.28 74.48 179.7 74.48 84.85 0 42.43"/>
            <polygon ref={elem => {actors.current[4] = elem}} className="cls-3" points="0 42.43 73.48 0 146.97 42.43 74.22 85.59 0 42.43"/>
            <polygon ref={elem => {actors.current[5] = elem}} className="cls-2" points="74.22 85.59 146.97 42.43 146.97 137.28 74.22 179.28 74.22 85.59"/>
            <polygon ref={elem => {actors.current[6] = elem}} className="cls-1" points="222.45 245.39 222.45 684.71 296.93 726.81 296.93 287.48 222.45 245.39"/>
            <polygon ref={elem => {actors.current[7] = elem}} className="cls-3" points="222.45 245.39 295.93 202.96 369.42 245.06 296.67 288.22 222.45 245.39"/>
            <polygon ref={elem => {actors.current[8] = elem}} className="cls-2" points="296.67 288.22 369.42 245.06 369.42 684.38 296.67 726.38 296.67 288.22"/>
            <polygon ref={elem => {actors.current[9] = elem}} className="cls-1" points="110.59 103.47 110.59 198.32 444.33 387 444.33 292.14 110.59 103.47"/>
            <polygon ref={elem => {actors.current[10] = elem}} className="cls-3" points="110.59 103.47 184.08 61.04 516.81 249.72 444.07 292.88 110.59 103.47"/>
            <polygon ref={elem => {actors.current[11] = elem}} className="cls-2" points="444.07 292.88 516.81 249.72 516.81 344.57 444.07 386.57 444.07 292.88"/>

        </svg>
    );
}

export default ItIso;
