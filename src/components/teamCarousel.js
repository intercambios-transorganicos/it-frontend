import React, {useState, useEffect} from 'react';
//import TinySlider from "tiny-slider-react"
import {useStaticQuery, graphql} from "gatsby"
import {GatsbyImage, getImage} from 'gatsby-plugin-image'
import loadable from "@loadable/component"
import "./teamCarousel.scss"



let DynamicModule = null;
const windowGlobal = typeof window !== 'undefined' && window;
  if (windowGlobal){
    DynamicModule = loadable((props) => loadable(() => import("tiny-slider-react"),{ssr:true}));
  }

const MyLoadable2 = loadable(() => import("tiny-slider-react"),{ssr:true});


const Teamcarousel = () => {
  const data = useStaticQuery(graphql`
  {
    allStrapiMembers {
      edges {
        node {
          id
          nombre
          titulo
          descripcion
          foto {
          localFile {
              childImageSharp {
              gatsbyImageData(
                  layout: CONSTRAINED , 
                  placeholder: DOMINANT_COLOR
                  width : 500
                  height : 500
                  )
              }
          }
          }
        }
      }
    }
  }
`);

var nodes = data.allStrapiMembers.edges;

    var[isBrowser, setBrowser] = useState(false);

    useEffect(()=>{
        if(DynamicModule){
            //console.log(DynamicModule);
            setBrowser(true);
        }
    },[])    

  
const settings = {
    //container : ".cambionombrecontainer",
    items : 1,
    slideBy : 1,
    lazyload : true,
    nav: false,
    mouseDrag: true,
    rewind : true, 
    controls: false,
    responsive : {
        640:{
            items : 4,
            slideBy : 3,
        }
    }
}

    return (

         <div className="carouselContainer">
             {isBrowser ?
                    <MyLoadable2 settings={settings} >
                    {
                        nodes.map((e, i) =>{
                           var currentId = e.node.id;
                            var nombre = e.node.nombre;
                            var titulo = e.node.titulo;
                            var descripcion = e.node.descripcion;
                            var currentImg = getImage(e.node.foto[0].localFile);
                            console.log(currentImg);
       
                             return(
                                   <div key={currentId}  className = "member_container">
                                       
                                       <GatsbyImage 
                                       
                                       image={currentImg}  
                                       alt={nombre}  
                                       key={currentId} /> 
                                       <div className="member_info">
                                       <h1>{nombre}</h1>
                                       <h2>{titulo}</h2>
                                       </div>
                                   </div>
                             )
                       })
                    }
                </MyLoadable2> :

                <div></div>
            }
         </div>

    );
}

export default Teamcarousel;
