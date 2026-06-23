const FichaAnime = ({
  image,
  title,
  seasons,
  chapters,
  films,
  gender,
  state,
  duration = '24 min por capítulo',
  audio,
  subtitle,
  password = 'No tiene contraseña',
  manga,
}) => {
  return (
    <section className="info">
      <div className="info__imgPortada">
        <figure>
          <img src={image} alt={`Portada de ${title}`} loading="lazy" decoding="async" />
        </figure>
      </div>

      <div className="info__ficha">
        <div className="info__ficha--tittle">
          <h3>Ficha técnica</h3>
        </div>
        <div className="info__ficha--datos">
          <p><b>Temporadas: </b>{seasons}</p>
          <p><b>Capítulos: </b>{chapters}</p>
          <p><b>Películas: </b>{films}</p>
          <p><b>Género: </b>{gender}</p>
          <p><b>Estado: </b>{state}</p>
          <p><b>Duración: </b>{duration}</p>
          <p><b>Audio: </b>{audio}</p>
          <p><b>Subtítulos: </b>{subtitle}</p>
          <p><b>Contraseña: </b>{password}</p>
          <p><b>Manga: </b>{manga}</p>
        </div>
      </div>
    </section>
  )
}

export default FichaAnime
