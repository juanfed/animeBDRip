import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App.jsx'
import { initReveal } from './utils/reveal.js'

import './index.css'

// Animaciones de entrada al hacer scroll (incluye rutas cargadas con lazy).
initReveal()

// Code-splitting por ruta: cada página se carga en su propio chunk.
const Inicio = lazy(() => import('./pages/Inicio.jsx'))
const ListAnime = lazy(() => import('./pages/ListAnime.jsx'))
const AnimeDetail = lazy(() => import('./pages/AnimeDetail.jsx'))
const ListFilms = lazy(() => import('./pages/ListFilms.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* basename para que el routing funcione bajo /animeBDRip/ en GitHub Pages */}
    <BrowserRouter basename="/animeBDRip">
      <Suspense fallback={<p className="route-loader">Cargando…</p>}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Inicio />} />
            <Route path="listAnime" element={<ListAnime />} />
            <Route path="listAnime/:slug" element={<AnimeDetail />} />
            <Route path="listFilms" element={<ListFilms />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>
)
