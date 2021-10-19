import React, {useState, useEffect} from 'react';

const Preguntas = (props) => {

    var [cCaption, setcCaption] = useState([]);
    var bgColor = props.bgColor;
    var txColor = props.txColor;
    var fSize = props.fSize;
    var dur = props.dur;

    function fill(){
        for(var i = 0 ; i < 20; i ++){
            setcCaption(prev=>[props.cCaption+"  ", ...prev])
        }
        
    }

    useEffect(()=>{
        
        fill();

        console.log(cCaption);
        
    },[])

    
    return (
        <div className="caption" style={{backgroundColor:bgColor, letterSpacing:"-1"}}>
          
          <svg className="svg_caption">
            <text
            style={{fill : txColor, fontSize: fSize }}
            >
                {cCaption.map(elem => elem)}
                <animateMotion 
                dur={dur}
                repeatCount="indefinite" 
                path="M 800 80 H-3800 " />
            </text>
           
           </svg>
 
                    
        </div>
    );
}

export default Preguntas;
