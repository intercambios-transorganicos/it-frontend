import React, { useState, useEffect } from 'react';
import { Animated } from "react-animated-css";

function AnimatedVisibility({ visible, children }) {

    const [noDisplay, setNoDisplay] = useState(!visible);

    useEffect(() => {
        if (!visible) setNoDisplay(true);
        else setNoDisplay(false);

    }, [visible]);

    const style = noDisplay ? { display: "none" } : null;

    return (
        
        <Animated
        className='col-10 col-lg-11 my-5 row p-0 justify-content-center'
        animationIn="fadeInDown"
        animationOut="fadeOutUp"
        animationInDuration={300}
        animationOutDuration={300}
        isVisible={visible}
        style={style}
        >

        {children}

        </Animated>
    );
}

export default AnimatedVisibility