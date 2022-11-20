import React from 'react';
import "./presentacion.scss"

const Presentacion = ({titulo, desc}) => {
     
    return (
        <div className="box presentacion">
        <div className="content">
            <h1>{titulo}</h1>
            <div className="separador"></div>
            <p>{desc}</p>
        </div>
        </div>
    );
}

export default Presentacion;
