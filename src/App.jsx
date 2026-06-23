import { Outlet } from 'react-router-dom'

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

import './App.css'

function App() {
  return (
    <>
      <Header />

      {/* Aquí se renderiza cada página; todas comparten el mismo header y footer */}
      <Outlet />

      <Footer />
    </>
  )
}

export default App
