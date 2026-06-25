import CardAnime from '../components/CardAnime.jsx'
import animes from '../data/animes.js'

import '../styles/inicio.css'

const PROXIMOS = [
  'Ao no exorcist', 'Asobi asobase', 'Banana fish', 'Break blade',
  'Devil may cry', 'Goblin slayer', 'Hunter x Hunter 2011', 'Jujutsu kaisen',
  'Moyoiga', 'Mirenai niki', 'Mob psycho 100', 'No game no life',
  'Psycho-pass', 'Tsurezure children', 'Zetman',
]

const Inicio = () => {
  return (
    <main>
      <title>AnimeBDRip — Información de anime, temporadas y películas</title>
      <meta
        name="description"
        content="Fichas técnicas, sinopsis, temporadas, capítulos y películas de tus animes favoritos."
      />

      <section className="intro reveal">
        <span className="intro__badge">★ Anime en calidad BD</span>
        <h2 className="intro__title">Bienvenido a AnimeBDRip</h2>
        <div className="intro__paragraph">
          <p>
            Hola a todos, esta es una página que estoy haciendo no solo porque me gusta ver
            anime, sino también para afianzar mis conocimientos en <b>programación web</b>,
            conseguir trabajo y aplicar lo aprendido aquí. Una de mis metas es hacer de esta
            una de las mejores páginas para conocer información de anime de todo tipo.
          </p>
          <p>
            <b><i>Nota: </i></b>Si tienes alguna sugerencia puedes hacérmela llegar por
            cualquiera de las redes de contacto que están al final de esta página, también si
            existe algún enlace caído o quieres que suba algún anime en específico.
          </p>
        </div>
      </section>

      <section className="anime">
        <div className="section__head reveal">
          <h2 className="section__title">Animes agregados</h2>
          <span className="section__count">{animes.length}</span>
        </div>

        <div className="cards--anime">
          {animes.map((anime) => (
            <div className="reveal" key={anime.slug}>
              <CardAnime
                ruta={`/listAnime/${anime.slug}`}
                title={anime.title}
                imagen={anime.image}
                cap={anime.chapters}
                tem={anime.seasons}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="newAnimes reveal">
        <div className="section__head section__head--center">
          <h2 className="section__title">Próximos animes</h2>
        </div>
        <div className="proximos__list">
          {PROXIMOS.map((name) => (
            <span className="proximos__chip" key={name}>{name}</span>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Inicio
