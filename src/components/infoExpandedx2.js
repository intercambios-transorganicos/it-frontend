import React, {useState, useEffect} from 'react';
import "./infoExpanded.scss";


const InfoExpandedx2 = (props) => {
  
    return (
        <div  style={{height:"100%"}}>
       
        <div className="info_" style={{backgroundColor: props.bgColor, color: props.txColor}}>
            
            <h1 className="title" >{props.titulo}</h1>
           <div className="content columns">
                
                <div className="column">
                    <p>{props.desc}</p>
                </div>
           </div>
        </div>

        </div>
    );
}

export default InfoExpandedx2;
