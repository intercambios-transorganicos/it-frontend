import React , {useState, useEffect, useRef} from 'react';
import JSONdata from '../../content/JSONpaths.json';

const Pathraiz = ({ setActive, setUrl, url }) => {

  var actors = useRef([]);

  function handleClick(e){

    setActive(true);
    setUrl(Number(e.target.id));

    console.log(e.target.id);
  }

  // Retorna un número entero aleatorio entre min (incluido) y max (excluido)
  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  useEffect(() => {
    
    console.log(url);

  }, [url])

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-200 -50 1500 900">

      {JSONdata.content.map((e, i) =>{
        var current = e;

        return(
          <path 
            onClick={handleClick}
            ref={elem => {actors.current[i] = elem}}
            id={getRandom(6,9)}
            key={i}
            className="module"
            d={current.d}
          />
        );

      })}

    </svg>
  );
}

export default Pathraiz;