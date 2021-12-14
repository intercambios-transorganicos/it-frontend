import React , {useState, useEffect, useRef} from 'react';
import JSONdata from '../../content/JSONpaths.json';
import useVideoquery from '../hooks/useVideoQuery';
import "./pathRaiz.scss"

const Pathraiz = ({ setActive, setUrl, url }) => {

  // QUERY DEL VIDEO, TRAIGO PLAYLIST
  const { playlist } = useVideoquery();

  var actors = useRef([]);

  function handleClick(e){

    setActive(true);

    if(url < Number(playlist.length - 1)){
      let newUrl = url + 1;
      setUrl(newUrl);

    } else{
      setUrl(0);
    }
  }

  // useEffect(() => {
    
  //   console.log(url);

  // }, [url])

  return (
    <svg className="pathRaiz" xmlns="http://www.w3.org/2000/svg" viewBox="-450 -200 2000 900">

      {JSONdata.content.map((e, i) =>{
        var current = e;

        return(
          <path 
            onClick={handleClick}
            ref={elem => {actors.current[i] = elem}}
            id={i}
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