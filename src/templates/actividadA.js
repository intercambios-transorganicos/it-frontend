import React from 'react';
import {graphql} from "gatsby"
import Layout from "../components/layout"
import "./actividadA.scss"

const Actividada = ({
  //data
}) => {
    // const{id, fecha, lugar, titulo, link, descripcion} = data.strapiActividades;
    // console.log(id, fecha, lugar);
    return (
       <Layout>
           
       </Layout>
    );
}


// export const query = graphql`

//  query Actividad($actividadId: String) {
//      strapiActividades(id: {eq: $actividadId})  {
//      id
//      fecha(formatString: "DD, MMM, YYYY")
//      lugar
//      titulo
//      link
//      descripcion
//    }
//  }

//  `

export default Actividada;
