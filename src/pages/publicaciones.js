import React from 'react';
import {Link} from "gatsby"
import Layout from "../components/layout"
import ChildBox from "../components/childBox"
import CirclePath from "../components/circlePath"

const Publicaciones = () => {
    return (
        <Layout>
            <div className="circlePathContainer" >
                <CirclePath text="Publicaciones•" />
            </div>
            <div className="publicaciones">
                <div className="publicaciones_content">


                <div className="tile is-ancestor">
                    <div className="tile is-vertical ">
                        <ChildBox autor="jane doe" titulo="Ciencia" id="articuloA" />
                        <ChildBox autor="jane doe" titulo="Ciencia" id="articuloA" />
                    </div>
                    <div className="tile is-vertical is-8">
                        <ChildBox autor="jane doe" titulo="Ciencia" id="articuloA" />
                        <ChildBox autor="jane doe" titulo="Ciencia" id="articuloA" />
                    </div>

                </div>

                <div className="tile is-ancestor">
                    <div className="tile is-vertical is-8">
                        <ChildBox autor="jane doe" titulo="Ciencia" id="articuloA" />
                        <ChildBox autor="jane doe" titulo="Ciencia" id="articuloA" />
                    </div>
                    <div className="tile is-vertical">
                        <ChildBox autor="jane doe" titulo="Ciencia"  id="articuloA"/>
                        <ChildBox autor="jane doe" titulo="Ciencia"  id="articuloA"/>
                    </div>

                </div>


                </div>

            </div>
        </Layout>
    );
}

export default Publicaciones;
