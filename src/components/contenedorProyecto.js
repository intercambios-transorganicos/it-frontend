import React from 'react'
import "./contenedorProyecto.scss"
import {GatsbyImage} from 'gatsby-plugin-image'
import {Link} from "gatsby"

function ContenedorProyecto({linkUrl, currentImage, currTitle, currSubTitle, reversed}) {

// // console.log(linkUrl)
var url = currTitle.split(' ').join('_').toLowerCase()
   if(reversed === true){
    return (
        <div className="secOut" >
           <Link to={`../${url}`} >
              <div key="index" className='columns contenedor-proyecto' >
                  <div className="column imgColumn" >
                     <GatsbyImage className="imgWrapper" image={currentImage} alt={currTitle} />
                  </div>
                  <div 
                  className="column textColumn"
                  style={{
                      backgroundColor: "#7C428C "
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
          <Link  to={`../${url}`} >
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
                     <GatsbyImage className="imgWrapper" image={currentImage} alt={currTitle} />
                  </div>
                  
              </div>
           </Link>   
        </div>
    )
   }
}

export default ContenedorProyecto