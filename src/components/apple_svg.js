import React from 'react';
import {Tween, TimeLine} from 'react-gsap';
import {Controller, Scene} from 'react-scrollmagic'

const Apple_svg = () => {

    return (
        <div className="apple_svg_container">
             <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 929.92 464.96">
                 
                <circle className="apple_c" cx="38%" cy="50%" r="232.48" fill="#bc0012"/>
                <circle className="apple_c" cx="62%" cy="50%" r="232.48" fill="#bc0012"/>
              </svg>
        </div>
    );
}

export default Apple_svg;
