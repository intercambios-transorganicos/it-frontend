import React, {useState, useEffect} from 'react';
import {useStaticQuery, graphql} from "gatsby"
import {GatsbyImage, getImage} from 'gatsby-plugin-image'

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
                gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
                }
            }
            }
          }
        }
      }
    }
  `);

    var nodes = data.allStrapiMembers.edges;
    var members = [];

useEffect(() =>{
    nodes.map((e, i)=>{
        var current = e.node;
       // console.log(current);
    });

},[])

    return (
        <div className="columns member-cards">
            
            {
                nodes.map((e, i) => {
                    var current = e.node;
                    var nombre = e.node.nombre;
                    var titulo = e.node.titulo;
                    var id = e.node.id;
                    var currentImg = e.node.foto
                    var imagenes = [];
                    var imgFinal = [];
                   // var image = getImage(e.node.foto[0].localFile);
                   imagenes.push(currentImg);
                   //console.log(imagenes[0][0]);
                   if(imagenes[0].length > 0 ){
                    imgFinal.push(getImage(imagenes[0][0].localFile));
                  }else{
                      imgFinal.push(undefined);
                  }
                  console.log(imgFinal, i);
                   
                  
                    return(
                        <div className="column member-card">
                            <div className=" member-content" >
                                {/* <GatsbyImage image={imgFinal[i]}  alt={nombre} key={id} /> */}
                                <h1>{nombre}</h1>
                                <h2> {titulo} </h2>
                            </div>
                        </div>
                    );
                })
            }
                  {/* <div className="column member-card">
                      <div className=" member-content" >
                          <h1>lorem</h1>
                      </div>
                  </div>
                  <div className="column member-card">
                      <div className=" member-content" >
                          <h1>lorem</h1>
                      </div>
                  </div>
                  <div className="column member-card">
                      <div className=" member-content" >
                          <h1>lorem</h1>
                      </div>
                  </div>
                  <div className="column member-card">
                      <div className=" member-content" >
                          <h1>lorem</h1>
                      </div>
                  </div>
                  <div className="column member-card">
                      <div className=" member-content" >
                          <h1>lorem</h1>
                      </div>
                  </div>
                  <div className="column member-card">
                      <div className=" member-content" >
                          <h1>lorem</h1>
                      </div>
                  </div> */}
              </div>
    );
}

export default Teamcarousel;
