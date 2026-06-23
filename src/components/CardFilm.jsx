const CardFilm = ({ title, img }) => {
  return (
    <div className="card">
      <div className="card__tittle">
        <h3>{title}</h3>
      </div>
      <div className="card__img">
        <figure className="card__img--figure">
          <img src={img} alt={`Portada de ${title}`} loading="lazy" decoding="async" />
        </figure>
      </div>
    </div>
  )
}

export default CardFilm
