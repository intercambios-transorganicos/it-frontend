import React from 'react';
import {Link} from "gatsby"
import Layout from "../components/layout"
import ChildBox from "../components/childBox"
const Publicaciones = () => {
    return (
        <Layout>
            <div className="publicaciones">
                <div className="publicaciones_content">


                <div className="tile is-ancestor">

                   <div className="tile is-vertical ">
                        <div className="tile is-parent is-vertical">                        
                            <ChildBox autor="Autor" titulo="Arte" subtitulo="elsubtitulo"  id="articuloA"/>                   
                        
                            <ChildBox autor="Autor" titulo="Ciencia" subtitulo="elsubtitulo" id="articuloA" />
                        </div>
                   
                        <div className="tile is-parent">
                           <ChildBox autor="Autor" titulo="Ciencia" subtitulo="elsubtitulo"  id="articuloA"/>
                        </div>

                   </div>

                    <div className="tile is-vertical">
                        <div className="tile is-parent ">
                            <ChildBox autor="Autor" titulo="Tecnologia" subtitulo="elsubtitulo"  id="articuloA"/>
                        </div>
                        <div className="tile is-parent ">
                            <ChildBox autor="Autor" titulo="Otros" subtitulo="elsubtitulo"  id="articuloA"/>
                        </div>
                    </div>

                </div>


                </div>

            </div>
        </Layout>
    );
}

export default Publicaciones;
