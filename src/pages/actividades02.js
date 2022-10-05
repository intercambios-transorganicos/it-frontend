import React from 'react';
import {Link} from "gatsby"
import Layout from "../components/layout"
import CirclePath from "../components/circlePath"
import {graphql} from "gatsby"
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleDown} from "@fortawesome/free-regular-svg-icons"
import "./actividades02.scss"
import { Accordion } from 'react-bootstrap';

const Actividades02 = ({
    data:{allStrapiActividades: {edges:actividades}}
}) => {

    console.log(actividades)
    return (
        <Layout>
            <CirclePath text=" Actividades •" textColor="#ffffff"/>

            <div className="actividades02">
                <div className="actSection section">
                    {
                        actividades.map((e,i)=>{
                            var currentImg= getImage(e.node.imagenes[0].localFile)
                            var oembed = e.node.oembed
                            var iFrame;
                            if(oembed){
                                iFrame = JSON.parse(oembed).rawData.html
                            }
                            return(
                                <div key={e+i}>
                                    <div className="actividad  has-text-white">
                                        
                                        <Accordion defaultActiveKey="0">
                                            <Accordion.Item eventKey="1" >
                                                <Accordion.Header>
                                                    <div className="level">
                                                        <div className="level-left">
                                                            <div className="level-item has-text-primary"><h2>{e.node.fecha}</h2></div>
                                                            <div className="level-item">-</div>
                                                            <div className="level-item"><h1>{e.node.titulo}</h1></div>
                                                        </div>
                                                        
                                                    </div>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <div>
                                                        <div className="content">
                                                        <h1 className="title  has-text-white">{e.node.lugar}</h1 >
                                                        <p>{e.node.descripcion}</p>
                                                            {e.node.link?
                                                                <div className="level "> <div className="level-left"><h3 className="level-item  has-text-white" >Link:</h3> <h6 className="level-item"><a className="level-item" >{e.node.link}</a></h6></div> </div>
                                                                :
                                                                <div></div>
                                                            }
                                                            {e.node.imagenes?
                                                                <GatsbyImage className="image" image={currentImg} alt={e.node.titulo+e.node.fecha} />
                                                                :
                                                                <div></div>
                                                            }
                                                            {e.node.oembed?
                                                                <div className="video">
                                                                    <div className="iFrame" dangerouslySetInnerHTML={{ __html: iFrame}} /> 
                                                                </div>
                                                                :
                                                                <div></div>
                                                            }
                                                        </div>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                        
                                    </div>
                                                    
                                    <div className="divider"></div>
                                </div>
                            )
                        })

                    }
                </div>
            </div>
        </Layout>
    );
}

export default Actividades02;


export const query = graphql`
  {
    allStrapiActividades(sort: {fields: fecha, order: DESC}) {
      edges {
        node {
          id
          titulo
          fecha(formatString: "MMM-DD-YYYY")
          lugar
          descripcion
          link
          oembed
          imagenes {
            localFile {
              childImageSharp {
                gatsbyImageData(layout: FIXED, height: 300, width: 300)
              }
            }
          }
        }
      }
    }
  }
`