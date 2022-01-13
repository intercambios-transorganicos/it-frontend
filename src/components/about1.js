import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import {Carousel} from "react-bootstrap"
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import Presentacion from "./presentacion"
import "./about1.scss";

const About1 = () => {
    const data = useStaticQuery(graphql`
    {
      allStrapiInfos {
        edges {
          node {
            id
            titulo
            descripcion
            imagen {
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
  `)

    var infos = data.allStrapiInfos.edges
  
    return (
        <div className="about1"  id="about-1">
            <div className="aboutCarousel">
            <Carousel 
            interval={5000}
            controls={true}
            indicators={true}
            fade={true}


             >
                {
                    infos.map((e, i) => {
                        var currentImg = getImage(e.node.imagen[0].localFile);
                        //console.log(e.node)
                        return(
                            <Carousel.Item key={e.node.id}  className="aboutSlide">
                                <GatsbyImage image={currentImg} alt={`img${e.node.id}`} />
                                <Presentacion titulo={e.node.titulo} desc={e.node.descripcion} />
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
            </div>


        </div>
    );
}

export default About1;
