import React, {useState, useRef} from 'react';
import {graphql} from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpand} from '@fortawesome/free-solid-svg-icons'
//import {Link} from "gatsby"
import Layout from "../components/layout";
import CirclePath from "../components/circlePath"
import "./actividades.scss";

export const Expand = ({ t, l, d}) =>{


  return(
    <div  className="columns">
        <div className="column">
            <div className="content  box">
            <h1>{ t }</h1>
              <h1>{ l }</h1>
              <p>{ d }</p>
            </div>
        </div>
      </div>
  )
}


const Actividades = ({
    data:{allStrapiActividades: {edges:actividades}}
}) => {

  var myRef = useRef([]);
  var[show, setShow] = useState(false);
  function handleClick(e){
    e.preventDefault();
    console.log(e);
    setShow(!show);
  }

  // console.log(actividades[1]);
    return (
        <Layout>
            <div className="actividadesContainer">
              <CirclePath  text=" Actividades •" textColor="#000000"/>
              <div className="actividadesWrapper">
                {
                  actividades.map((e, i) => {
                    var current = e.node;
                    //console.log(current)
                    return(
                     <div key={current.id} className="">
                       {/* TOP */}
                          <div className="actividadElement columns">
                            <div className="column has-text-centered">
                              <h1 className="subtitle fecha">
                                {current.fecha}
                              </h1>
                          </div>
                          <div className="column has-text-centered is-8">
                            <h1 className="title titulo" >
                            {
                              current.titulo
                            }
                            </h1>
                          </div>
                          <div className="column has-text-centered">
                            {
                              <FontAwesomeIcon 
                              id={current.id}
                              onClick={(e) =>{handleClick(e)}}
                              className="actividadExpand"
                              size="2x" 
                              icon={faExpand} />
                            }
                          </div>
                        </div>
                        {/* BOTTOM */}
                        
                          {
                            show?
                            <Expand ref={elem => {myRef.current[i] = elem}} id={current.id} show={show} t={current.titulo} l={current.lugar} d={current.descripcion} />
                            :
                            <div></div>
                          }
                       
                     </div>
                    )
                  })
                }
              </div>
            </div>
        </Layout>
    );
}


export const query = graphql`
  {
    allStrapiActividades {
      edges {
        node {
          id
          fecha(formatString: "DD MMM YYYY")
          lugar
          titulo
          link
          descripcion
        }
      }
    }
  }
`
export default Actividades;
