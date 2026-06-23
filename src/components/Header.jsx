import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import hamburger from '../assets/menuHamburguer.svg'

import '../styles/header.css'

const Header = () => {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastY = useRef(0)

  // Oculta el header al bajar y lo muestra al subir un poco.
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      if (y > lastY.current && y > 80) {
        setHidden(true) // bajando
      } else {
        setHidden(false) // subiendo
      }
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setOpen(false)

  return (
    <header>
      {/* Si el menú está abierto no lo escondemos aunque se baje */}
      <nav className={`nav ${hidden && !open ? 'nav--hidden' : ''}`}>
        <div className="nav__container">
          <h1 className="nav__logo">
            <Link to="/" id="tittle" onClick={closeMenu}>
              AnimeBDRip
            </Link>
          </h1>

          {/* Botón hamburguesa (solo móvil) */}
          <button
            type="button"
            className="nav__label"
            aria-label="Abrir menú de navegación"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <img src={hamburger} alt="" aria-hidden="true" className="nav__img" />
          </button>

          <div className={`nav__menu ${open ? 'nav__menu--open' : ''}`}>
            <Link to="/" onClick={closeMenu}>Inicio</Link>
            <Link to="/listAnime" onClick={closeMenu}>Lista Animes</Link>
            <Link to="/listFilms" onClick={closeMenu}>Películas</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
