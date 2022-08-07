import React from 'react';
import { Link } from 'react-router-dom';
const CardAnime = ({ ruta, title, imagen, cap, tem }) => {
	return (
		<div className="card">
			<div className="card__tittle">
				<h3><Link to={ruta}>{title}</Link></h3>
			</div>
			<div className="card__img">
				<figure className="card__img--figure">
					<img loading="lazy" src={imagen}
						alt={title} />
				</figure>
			</div>
			<div className="card__information">
				<p><b>Capitulos: </b>{cap}</p>
				<p><b>Temporadas: </b>{tem}</p>
			</div>
		</div>
	);
};

export default CardAnime;
