import React from 'react';
import TeamCarousel from "../components/teamCarousel"
import CirclePath from "../components/circlePath"
import Layout from "../components/layout"
import "./nosotres.scss"
import loadable from "@loadable/component"
//const MyLoadable2 = loadable(() => import("../components/teamCarousel"),{ssr:true});


const Publicaciones = () => {
    return (
        <Layout>
            <div className="teamText" >
                 
                     <CirclePath text="Nuestro • Equipo • " textColor="#242424" />
               
            </div>
            <div className="nosotres">
              <TeamCarousel/>
            </div>
               
        </Layout>
    );
}

export default Publicaciones;
