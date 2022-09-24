import React from "react";
import { Link } from "react-router-dom";

import "../styles/listAnime.css";

const ListAnime = () => {
  function TitleAnime({ ruta, name }) {
    return (
      <li>
        <Link to={ruta}>{name}</Link>
      </li>
    );
  }

  return (
    <main>
      <section className="listAnime">
        <div className="listAnime__Encabezado">
          <h2>Lista Anime</h2>
          {/* <p><b>Buscador</b></p> */}
        </div>

        <section className="lista__animes">
          <h3 className="lista__animes--title">A</h3>
          <div className="listAnime__animes">
            <TitleAnime
              ruta="ano-natsu-de-matteru"
              name="Ano natsu de matteru"
            />
            <TitleAnime ruta="another" name="Another" />
          </div>

          <h3 className="lista__animes--title">B</h3>
          <div className="listAnime__animes">
            <TitleAnime ruta="btoom" name="Btoom!" />
          </div>

          <h3 className="lista__animes--title">D</h3>
          <div className="listAnime__animes">
            <TitleAnime ruta="deadman-wonderland" name="Deadman wonderland" />
          </div>

          <h3 className="lista__animes--title">G</h3>
          <div className="listAnime__animes">
            <TitleAnime ruta="gangsta" name="Gangsta" />
            <TitleAnime ruta="golden-time" name="Golden time" />
          </div>

          <h3 className="lista__animes--title">I</h3>
          <div className="listAnime__animes">
            <TitleAnime ruta="inuyashiki" name="Inuyashiki" />
          </div>

          <h3 className="lista__animes--title">K</h3>
          <div className="listAnime__animes">
            <TitleAnime
              ruta="koutetsu-no-kanaberi"
              name="Kousetsu no kabaneri"
            />
          </div>

          <h3 className="lista__animes--title">O</h3>
          <div className="listAnime__animes">
            <TitleAnime ruta="one-punch-man" name="One punch man" />
            <TitleAnime
              ruta="ookami-shoujo-to-kuro-ouji"
              name="Ookami shoujo to kuo ouji"
            />
          </div>

          <h3 className="lista__animes--title">P</h3>
          <div className="listAnime__animes">
            <TitleAnime ruta="parasyte" name="Parasyte" />
          </div>

          <h3 className="lista__animes--title">R</h3>
          <div className="listAnime__animes">
            <TitleAnime ruta="re-life" name="Re Life" />
            <TitleAnime ruta="re-zero" name="Re zero" />
          </div>

          <h3 className="lista__animes--title">R</h3>
          <div className="listAnime__animes">
            <TitleAnime ruta="rokka-no-yuusha" name="Rokka no yuusha" />
          </div>

          <h3 className="lista__animes--title">S</h3>
          <div className="listAnime__animes">
            <TitleAnime
              ruta="sukurasou-no-pet-na-kanojo"
              name="Sakurasou no Pet na kanojo"
            />
            <TitleAnime ruta="subete-ga-f-ni-haru" name="Subete ga F ni haru" />
          </div>

          <h3 className="lista__animes--title">Y</h3>
          <div className="listAnime__animes">
            <TitleAnime ruta="youjo-senki" name="Youjo senki" />
          </div>
        </section>
      </section>
    </main>
  );
};

export default ListAnime;
