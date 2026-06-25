import { Link } from 'react-router-dom'

import animes from '../data/animes.js'

import '../styles/listAnime.css'

// Agrupa los animes por su inicial: { A: [...], B: [...] }
const groupByInitial = (list) =>
  [...list]
    .sort((a, b) => a.title.localeCompare(b.title, 'es'))
    .reduce((groups, anime) => {
      const initial = anime.title[0].toUpperCase()
      ;(groups[initial] ??= []).push(anime)
      return groups
    }, {})

const ListAnime = () => {
  const grupos = groupByInitial(animes)

  return (
    <main>
      <title>Lista de animes — AnimeBDRip</title>
      <meta name="description" content="Listado completo de animes disponibles en AnimeBDRip, ordenados alfabéticamente." />

      <section className="listAnime">
        <div className="listAnime__Encabezado reveal">
          <h2>Lista de animes</h2>
        </div>

        <section className="lista__animes">
          {Object.entries(grupos).map(([letra, items]) => (
            <div key={letra} className="lista__grupo reveal">
              <h3 className="lista__animes--title">{letra}</h3>
              <ul className="listAnime__animes">
                {items.map((anime) => (
                  <li key={anime.slug}>
                    <Link to={`/listAnime/${anime.slug}`}>{anime.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </section>
    </main>
  )
}

export default ListAnime
