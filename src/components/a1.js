import React, {useEffect, useState, useRef} from 'react';
import gsap from "gsap"

const A1 = (props) => {
    var[active, isActive] = useState(null);
    var actors = useRef([]);

    useEffect(()=>{
        isActive(props.action);
            
                if(active = true){
                    console.log("action");
                    var tl = gsap.timeline({});
                    tl.from(actors.current[0], {r:0, duration: 1})
                    .from(actors.current[1], {x:-200, duration: 1},"-=0.5")
                    .from(actors.current[2], {width: "0%", height:"0%", duration: 1},"-=0.5")

                    //tl.play();
                }else{
                    //console.log("no action");
                }
    },[props])

    
    return (
            <svg id="svgA1">
                <circle ref={elem => {actors.current[0] = elem}} cx={"50%"} cy={"50%"} r="50%" fill={"pink"} />
                <rect ref={elem => {actors.current[1] = elem}} className="svgA1_rect" width={"30%"} height={"100%"} fill={"blue"}/>
                <rect ref={elem => {actors.current[2] = elem}} className="svgA1_cuad" x={"65%"} y={"25%"} width={"50%"} height={"50%"} fill={"green"}/>
            </svg>


    );
}

export default A1;
