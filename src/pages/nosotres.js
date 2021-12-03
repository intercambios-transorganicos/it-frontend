import React from 'react';
import {Link} from "gatsby"
import Layout from "../components/layout"
//import TeamCarousel from "../components/teamCarousel"
import CirclePath from "../components/circlePath"
import loadable from "@loadable/component"

const MyLoadable = loadable(() => import("../components/teamCarousel"))

const Publicaciones = () => {
    return (
        <Layout>
            <div className="teamText" >
                 <div className="circlePathContainer">
                     <CirclePath text="Nuestro • Equipo • " textColor="#242424" />
                 </div>
            </div>
            <div className="nosotres">
              <MyLoadable/>
            </div>
               
        </Layout>
    );
}

export default Publicaciones;
