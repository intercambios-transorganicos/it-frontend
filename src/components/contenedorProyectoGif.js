import React from 'react'
import "./contenedorProyecto.scss"
import {Link} from "gatsby"

function ContenedorProyectoGif({linkUrl, gifUrl , currentImage, currTitle, currSubTitle, reversed}) {

console.log(gifUrl)
   if(reversed === true){
    return (
        <div className="secOut" >
          <Link to={`../${linkUrl}`} >
              <div key="index" className='columns contenedor-proyecto' >
                  <div className="column imgColumn" >
                  <img className="imgGif"  src={gifUrl} alt={currTitle + "gif"} />
                  </div>
                  <div 
                  className="column textColumn"
                  style={{
                      backgroundColor: "#7C428C"
                  }}
                   >
                      <div className="content" >
                          <h1>{currTitle}</h1>
                          <p>{currSubTitle}</p>
                      </div>
                  </div>
              </div>
              </Link>  
        </div>
    )
   }else{
    return (
        <div className="secOut" >
           <Link to={`../${linkUrl}`} >
              <div key="index" className='columns contenedor-proyecto' >

              <div 
              className="column textColumn "
              style={{
                backgroundColor: "#0DB39B"
              }}
               >
                      <div className="content" >
                          <h1>{currTitle}</h1>
                          <p>{currSubTitle}</p>
                      </div>
                  </div>

                  <div className="column imgColumn" >
                      <img className="imgGif" src={gifUrl} alt={currTitle + "gif"} />
                  </div>
                  
              </div>
            </Link>   
        </div>
    )
   }
}

export default ContenedorProyectoGif