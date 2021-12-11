import React from 'react';
import "./nosotres.scss"
import Layout from "../components/layout"
import TeamCarousel from "../components/teamCarousel"
import CirclePath from "../components/circlePath"
import loadable from "@loadable/component"

//const MyLoadable = loadable(() => import("../components/teamCarousel"))

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
