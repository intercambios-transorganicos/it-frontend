import React from 'react';

const Circlepath = (props) => {
    return (
       <svg viewBox="0 0 500 500" className="circlePath" >
           <defs>
               <path 
               d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" 
               id="textcircle" >
                   <animateTransform
                    attributeName="transform"
                    begin="0s"
                    dur="30s"
                    type="rotate"
                    from="0 250 250"
                    to="360 250 250"
                    repeatCount="indefinite" 
                    />
               </path>
           </defs>
           <text dy="70" textLength="1220" font-size="4em">
               <textPath href="#textcircle" >
               {props.text}
               </textPath>
           </text>
       </svg>
    );
}

export default Circlepath;
