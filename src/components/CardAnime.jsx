import React from 'react';
import { Link } from 'react-router-dom';
const CardAnime = (props) => {
    return (
        <div className="card">
            <div className="card__tittle">
                <h3><Link to={props.ruta}>{props.title}</Link></h3>
            </div>
            <div className="card__img">
                <figure className="card__img--figure">
                    <img loading="lazy" src={props.imagen}
                        alt={props.title} />
                </figure>
            </div>
            <div className="card__information">
                <p><b>Capitulos: </b>{props.cap}</p>
                <p><b>Temporadas: </b>{props.tem}</p>
            </div>
        </div>
    );
};

export default CardAnime;
