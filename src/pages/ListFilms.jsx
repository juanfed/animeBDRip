import CardFilm from '../components/CardFilm.jsx'
import ImagenesFilms from '../components/ImagenesFilms.js'

import '../styles/inicio.css'

const films = [
  { id: 'arrietty', title: 'Arrietty y el mundo de los diminutos', img: ImagenesFilms.arrietty },
]

const ListFilms = () => {
  return (
    <main>
      <title>Películas — AnimeBDRip</title>
      <meta name="description" content="Listado de películas de anime disponibles en AnimeBDRip." />

      <section className="anime">
        <div className="anime__tittle">
          <h2>Listado de películas</h2>
        </div>

        <div className="cards--anime">
          {films.map((film) => (
            <CardFilm key={film.id} title={film.title} img={film.img} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default ListFilms
