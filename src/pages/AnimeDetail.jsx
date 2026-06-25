import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import FichaAnime from '../components/FichaAnime.jsx'
import FichaSipnosis from '../components/FichaSipnosis.jsx'
import FichaDonwload from '../components/FichaDonwload.jsx'
import NotFound from './NotFound.jsx'

import { getAnimeBySlug } from '../data/animes.js'

import '../styles/anime.css'

// Base del backend opcional. Solo se usa para los animes que definen `api`.
const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8080'

// Mapea la respuesta del backend al formato interno (solo campos presentes).
const mergeFromApi = (base, data) => ({
  ...base,
  seasons: data.seasons ?? base.seasons,
  chapters: data.chapters ?? base.chapters,
  films: data.movies ?? base.films,
  gender: data.gender ?? base.gender,
  state: data.state ?? base.state,
  audio: data.audio ?? base.audio,
  subtitle: data.subtitle ?? base.subtitle,
  manga: data.manga ?? base.manga,
  password: data.password ?? base.password,
  synopsis: data.sipnosis ? [data.sipnosis] : base.synopsis,
})

const AnimeDetail = () => {
  const { slug } = useParams()
  const staticAnime = getAnimeBySlug(slug)

  const [anime, setAnime] = useState(staticAnime)
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    setAnime(staticAnime)
    setPhotos([])

    if (!staticAnime?.api) return

    let cancelled = false
    // axios solo se carga (chunk aparte) cuando un anime usa backend.
    import('axios').then(({ default: axios }) => {
      const { name, gallery } = staticAnime.api

      axios
        .get(`${API_BASE}/animeBDRip/listAnime/${name}`)
        .then((res) => {
          if (!cancelled && res.data) setAnime(mergeFromApi(staticAnime, res.data))
        })
        .catch((error) => {
          // Sin backend disponible se mantienen los datos estáticos.
          console.warn('No se pudo cargar la ficha desde el backend:', error.message)
        })

      if (gallery) {
        axios
          .get(`${API_BASE}/animeBDRip/listAnime/anime/1`)
          .then((res) => {
            const enlaces = res.data?.enlaces
            if (!cancelled && enlaces) setPhotos(enlaces.split(','))
          })
          .catch(() => {})
      }
    })

    return () => {
      cancelled = true
    }
  }, [slug, staticAnime])

  if (!staticAnime) return <NotFound />

  return (
    <main>
      <title>{`${anime.title} — AnimeBDRip`}</title>
      <meta name="description" content={anime.synopsis?.[0] ?? `Ficha de ${anime.title}`} />

      <h2 className="reveal">{anime.title}</h2>

      <FichaAnime
        image={anime.image}
        title={anime.title}
        seasons={anime.seasons}
        chapters={anime.chapters}
        films={anime.films}
        gender={anime.gender}
        state={anime.state}
        duration={anime.duration}
        audio={anime.audio}
        subtitle={anime.subtitle}
        password={anime.password}
        manga={anime.manga}
      />

      {photos.length > 0 && (
        <section className="gallery">
          <h3 className="gallery__title">Imágenes</h3>
          <div className="gallery__grid">
            {photos.map((photo) => (
              <figure className="gallery__figure" key={photo}>
                <img src={photo} alt={`Captura de ${anime.title}`} loading="lazy" decoding="async" />
              </figure>
            ))}
          </div>
        </section>
      )}

      <FichaSipnosis paragraphs={anime.synopsis} />

      <FichaDonwload />
    </main>
  )
}

export default AnimeDetail
