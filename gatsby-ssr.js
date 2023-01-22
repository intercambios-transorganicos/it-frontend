/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from 'react'
export const onRenderBody = ({
    setPreBodyComponents,
    setBodyAttributes,
}) => {
    setPreBodyComponents([
        <div key="load123" className="loader_container" id="preloader">
            <svg className="itLoader">
            
            <g transform="translate(25, 0) scale(1.5)" >
                      <path fill="#7c428c">
                      <animate 
                        attributeName="d" 
                        dur="2000ms" 
                        repeatCount="20"
                        keyTimes="0;
                                  .0625;
                                  .3125;
                                  .395833333;
                                  .645833333;
                                  .833333333;
                                  1"
                        calcMode="spline" 
                        keySplines="0,0,1,1;
                                    .42,0,1,1;
                                    0,0,.58,1;
                                    .42,0,.58,1;
                                    .42,0,.58,1;
                                    .42,0,.58,1"
                            
                        values="M 0,0 C 50,0 50,0 100,0 100,50 100,50 100,100
                                50,100 50,100 0,100 0,50 0,50 0,0 Z;
                                      
                                M 0,0 C 50,0 50,0 100,0 100,50 100,50 100,100
                                50,100 50,100 0,100 0,50 0,50 0,0 Z; 

                                M 50,0 C 75,50 75,50 100,100 50,100 50,100 0,100
                                12.5,75 12.5,75 25,50 37.5,25 37.5,25 50,0 Z;

                                M 50,0 C 75,50 75,50 100,100 50,100 50,100 0,100
                                12.5,75 12.5,75 25,50 37.5,25 37.5,25 50,0 Z;

                                M 100,50 C 100,77.6 77.6,100 50,100 22.4,100 0,77.6
                                0,50 0,22.4 22.4,0 50,0 77.6,0 100,22.4 100,50 Z;
                                      
                                M 100,50 C 100,77.6 77.6,100 50,100 22.4,100 0,77.6 
                                0,50 0,22.4 22.4,0, 50,0 77.6,0 100,22.4 100,50 Z;
                                      
                                M 100,100 C 50,100 50,100 0,100 0,50 0,50 0,0
                                50,0 50,0 100,0 100,50 100,50 100,100 Z;"/>
                      </path>

                      </g>
                      <text x="35%" y="100%"
                                fontFamily="Verdana"
                                fontSize="10"
                                fill=""
                                >
                            Cargando!
                        </text>
        </svg>
        </div>
    ])

    
    setBodyAttributes({
        className:"preloader_active"
    })
  }
  