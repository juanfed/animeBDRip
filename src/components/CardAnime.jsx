import { Link } from 'react-router-dom'

const CardAnime = ({ ruta, title, imagen, cap, tem }) => {
  return (
    <Link to={ruta} className="card">
      <div className="card__tittle">
        <h3>{title}</h3>
      </div>

      <div className="card__img">
        <figure className="card__img--figure">
          <img
            loading="lazy"
            decoding="async"
            width="180"
            height="260"
            src={imagen}
            alt={`Portada de ${title}`}
          />
        </figure>
      </div>

      <div className="card__information">
        <p><b>Capítulos: </b>{cap}</p>
        <p><b>Temporadas: </b>{tem}</p>
      </div>
    </Link>
  )
}

export default CardAnime
