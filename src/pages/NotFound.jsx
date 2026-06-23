import { Link } from 'react-router-dom'

import '../styles/notFound.css'

const NotFound = () => {
  return (
    <main className="notFound">
      <title>Página no encontrada — AnimeBDRip</title>
      <meta name="robots" content="noindex" />

      <h1 className="notFound__code">404</h1>
      <p className="notFound__text">La página que buscas no existe o fue movida.</p>
      <Link className="notFound__link" to="/">Volver al inicio</Link>
    </main>
  )
}

export default NotFound
