import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom" // version 6
import Inicio from './pages/Inicio';
import ListAnime from './pages/ListAnime';

// Lista de todos los animes en orden alfabetico
import AnoNatsuDeMatteru from './pages/lista_animes/AnoNatsuDeMatteru';
import Another from './pages/lista_animes/Another';
import Btoom from './pages/lista_animes/Btoom';
import DeadmanWonderland from './pages/lista_animes/DeadmanWonderland';
import Gangsta from './pages/lista_animes/Gangsta';
import GoldenTime from './pages/lista_animes/GoldenTime';
import Inuyashiki from './pages/lista_animes/Inuyashiki';
import KoutetsuNoKabaneri from './pages/lista_animes/KoutetsujouNoKabaneri';
import OnePunchMan from './pages/lista_animes/OnePunchMan';
import OokamiShoujoToKuroOuji from './pages/lista_animes/OokamiShoujoToKuroOuji';
import Parasyte from './pages/lista_animes/Parasyte';
import ReLife from './pages/lista_animes/ReLife';
import ReZero from './pages/lista_animes/ReZero';
import RokkaNoYuusha from './pages/lista_animes/RokkaNoYuusha';
import SakurasouNoPetNaKanojo from './pages/lista_animes/SakurasouNoPetNaKanojo';
import SubeteGaFNiharu from './pages/lista_animes/SubeteGaFNiHaru';
import YoujoSenki from './pages/lista_animes/YoujoSenki';
import ListFilms from './pages/ListFilms';
import PageNoFound from './pages/PageNoFound';


// Lista de todas las peliculas
import ArrietyEnElMundoDeLosDiminutos from './pages/lista_peliculas/ArrietyEnElMundoDeLosDiminutos';



ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/animeBDRip" element={<App />} >
      <Route index element={<Inicio />} />  {/* No coloco un path para que me lo cargue por defecto */}
        <Route path="listAnime" element={<ListAnime />} />
          <Route path='listAnime/ano-natsu-de-matteru' element={<AnoNatsuDeMatteru />} />
          <Route path='listAnime/another' element={<Another />} />
          <Route path='listAnime/btoom' element={<Btoom />} />
          <Route path='listAnime/deadman-wonderland' element={<DeadmanWonderland />} />
          <Route path='listAnime/gangsta' element={<Gangsta />} />
          <Route path='listAnime/golden-time' element={<GoldenTime />} />
          <Route path='listAnime/inuyashiki' element={<Inuyashiki />} />
          <Route path='listAnime/koutetsu-no-kanaberi' element={<KoutetsuNoKabaneri />} />
          <Route path='listAnime/one-punch-man' element={<OnePunchMan />} /> 
          <Route path='listAnime/ookami-shoujo-to-kuro-ouji' element={<OokamiShoujoToKuroOuji /> } />
          <Route path='listAnime/parasyte' element={<Parasyte /> } />
          <Route path='listAnime/re-life' element={<ReLife />} />
          <Route path='listAnime/re-zero' element={<ReZero />} />
          <Route path='listAnime/rokka-no-yuusha' element={<RokkaNoYuusha />} />
          <Route path='listAnime/sukurasou-no-pet-na-kanojo' element={<SakurasouNoPetNaKanojo />} />
          <Route path='listAnime/subete-ga-f-ni-haru' element={<SubeteGaFNiharu />} />
          <Route path='listAnime/youjo-senki' element={<YoujoSenki />} />

          {/* Ruta para las peliculas */}

        <Route path='listFilms' element={<ListFilms />} />
          <Route path='listFilms/ArrietyEnElMundoDeLosDiminutos' element={<ArrietyEnElMundoDeLosDiminutos />} />
      </Route>
        <Route path='*' element={<PageNoFound />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
reportWebVitals();
