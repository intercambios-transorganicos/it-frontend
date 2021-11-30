import React , {useState, useEffect, useRef} from 'react';
import JSONdata from '../../content/JSONpaths.json';

const Pathraiz = (props) => {
var actors = useRef([]);

function handleClick(e){
  props.modal(true);
  props.seturl(e.target.id);
  console.log(e.target.id);
  console.log(typeof e.target.id);
}

    return (
        <svg className="pathRaiz" xmlns="http://www.w3.org/2000/svg" viewBox="-200 -200 1500 900">

          {JSONdata.content.map((e, i) =>{
            var current = e;
            return <path onClick={handleClick} ref={elem => {actors.current[i] = elem} } id={i} key={i} className="module" d={current.d} />
          })}

            
            </svg>
    );
}

export default Pathraiz;
