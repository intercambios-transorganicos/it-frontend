import React, {useState, useRef} from 'react';
import {graphql} from "gatsby";
import Layout from "../components/layout";
import CirclePath from "../components/circlePath"
import ActividadesExpand from "../components/actividadesExpand"
import "./actividades.scss";


const Actividades = ({
    data:{allStrapiActividades: {edges:actividades}}
}) => {

  var myRef = useRef([]);
  var[show, setShow] = useState(false);
  
  function handleClick(e){
    e.preventDefault();
    // console.log(myRef.current);
    setShow(!show);
  }

  // // console.log(actividades[1]);
    return (
        <Layout>
            <div className="actividadesContainer">
              <CirclePath  text=" Actividades •" textColor="#000000"/>
              <div className="actividadesWrapper">
                { actividades?
                  actividades.map((e, i) => {
                    var current = e.node;
                    /*var oe = JSON.parse(current.oembed);
                    var currentData = "";
                    
                    if(oe){
                      currentData = oe.rawData.html;
                    }*/

                    return(
                      <div>
                        <ActividadesExpand 
                        key={current.id}
                        fecha={current.fecha}
                        titulo={current.titulo}
                        id={current.id}
                        link_={current.link}
                        lugar={current.lugar}
                        desc={current.descripcion}
                        /*mainData={currentData}*/
                        />
                      </div>
                    )

                   
                  })

                  :

                  <div>Not found</div>


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
          # oembed
        }
      }
    }
  }
`
export default Actividades;
