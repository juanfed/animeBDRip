import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom" // version 6
import Inicio from './pages/Inicio';
import ListAnime from './pages/ListAnime';
import { AnoNatsuDeMatteru } from './pages/lista_animes/AnoNatsuDeMatteru';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/animeBDRip" element={<App />} >
      <Route index element={<Inicio />} />  {/* No coloco un path para que me lo cargue por defecto */}
        <Route path="listAnime" element={<ListAnime />} />
        <Route path='listAnime/ano-natsu-de-matteru' element={<AnoNatsuDeMatteru />} />
      </Route>
    </Routes>
  </Router>,
  document.getElementById('root')
);
reportWebVitals();
