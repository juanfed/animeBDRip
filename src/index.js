import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom" // version 6
import Inicio from './pages/Inicio';
import ListAnime from './pages/ListAnime';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path='' element={<Inicio />} />  {/* No coloco un path para que me lo cargue por defecto */}
        <Route path="listAnime" element={<ListAnime />} />
        <Route />
      </Route>
    </Routes>
  </Router>,
  document.getElementById('root')
);
reportWebVitals();
