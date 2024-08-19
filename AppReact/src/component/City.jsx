import { Fragment } from "react";
import './CityStyle.css'

function City ( {nombre, descripcion, imagen} ){
    return (
        <>
        <div className="ciudad">
            <h3 className="ciudad_titulo">{nombre}</h3>
            <p className="ciudad_descripcion">{descripcion}</p>
            <img src={imagen} alt={nombre} className="ciudad_imagen" />
        </div>
        </>
    );
}

export default City;