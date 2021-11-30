import React from 'react';
import {Link} from "gatsby"
import Layout from "../components/layout"
import TeamCarousel from "../components/teamCarousel"
import CirclePath from "../components/circlePath"


const Publicaciones = () => {
    return (
        <Layout>
            <div className="teamText" >
                 <CirclePath text="Nuestro • Equipo • " />
            </div>
            <div className="nosotres">
              <TeamCarousel/>
            </div>
               
        </Layout>
    );
}

export default Publicaciones;
