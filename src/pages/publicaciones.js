import React from 'react';
import {Link} from "gatsby"
import Layout from "../components/layout"
import ChildBox from "../components/childbox"
import CirclePath from "../components/circlePath"
import {graphql} from "gatsby"
import "./publicaciones.scss"

const Publicaciones = ({
    data:{ allStrapiArticulos:{edges:articulos} }
}) => {

    console.log(articulos);
    return (
        <Layout>
            
            <CirclePath text="• Publicaciones ▪ " textColor="#ffffff" />
  
            <div className="publicaciones">

                <div className="publicacionesContent">

                     <div className="grillaPublicaciones" >
                        
                            {
                                articulos?
                                articulos.map((e, i) => {
                                  var current = e.node;
                                  var url = current.Titulo.split(' ').join('_').toLowerCase()
                                  return(
                                      <Link  key={current.id} to={`../${url}`} >
                                      <ChildBox autor={current.Autor} titulo={current.Titulo} id={current.id} />
                                      </Link>
                                  )
                              })
                              :
                              <div>no data</div>
                            } 
                       
                    </div> 

                </div>

            </div>
        </Layout>
    );
}



export const query = graphql`
  {
    allStrapiArticulos {
      edges {
        node {
          id
          Autor
          Titulo
          Subtitulo
          Contenido
          
        }
      }
    }
  }
`

export default Publicaciones;
