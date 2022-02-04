import React from 'react';
import '../styles/listAnime.css';
import { Link } from 'react-router-dom';

const ListAnime = () => {
    function TitleAnime(props) {
        return (
            <li><Link to={props.ruta}>{props.name}</Link></li>
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

                    <h3 className='lista__animes--title'>A</h3>
                    <div className='listAnime__animes'>
                        <TitleAnime ruta='#' name="Ano natsu de matteru" />
                        <TitleAnime ruta='#' name="Another" />
                    </div>

                    <h3 className='lista__animes--title'>B</h3>
                    <div className='listAnime__animes'>
                        <TitleAnime ruta='#' name="Btoom!" />
                    </div>

                    <h3 className='lista__animes--title'>D</h3>
                    <div className='listAnime__animes'>
                        <TitleAnime ruta='#' name="Deadman wonderland" />
                    </div>

                    <h3 className='lista__animes--title'>G</h3>
                    <div className='listAnime__animes'>
                        <TitleAnime ruta='#' name="Gangsta" />
                        <TitleAnime ruta='#' name="Golden time" />
                    </div>

                    <h3 className='lista__animes--title'>I</h3>
                    <div className='listAnime__animes'>
                        <TitleAnime ruta='#' name="Inuyashiki" />
                    </div>

                    <h3 className='lista__animes--title'>K</h3>
                    <div className='listAnime__animes'>
                        <TitleAnime ruta='#' name="Kousetsu no kabaneri" />
                    </div>

                    <h3 className='lista__animes--title'>O</h3>
                    <div className='listAnime__animes'>
                        <TitleAnime ruta='#' name="One punch man" />
                        <TitleAnime ruta='#' name="Ookami shoujo to kuo ouji" />
                    </div>

                    <h3 className='lista__animes--title'>P</h3>
                    <div className='listAnime__animes'>
                        <TitleAnime ruta='#' name="Parasyte" />
                    </div>

                    <h3 className='lista__animes--title'>R</h3>
                    <div className='listAnime__animes'>
                        <TitleAnime ruta='#' name="Re Life" />
                        <TitleAnime ruta='#' name="Re zero" />
                    </div>

                    <h3 className='lista__animes--title'>R</h3>
                    <div className='listAnime__animes'>
                        <TitleAnime ruta='#' name="Rokka no yuusha" />
                    </div>

                    <h3 className='lista__animes--title'>S</h3>
                    <div className='listAnime__animes'>
                        <TitleAnime ruta='#' name="Sakurasou no Pet na kanojo" />
                        <TitleAnime ruta='#' name="Subete ga F ni haru" />
                    </div>

                    <h3 className='lista__animes--title'>Y</h3>
                    <div className='listAnime__animes'>
                        <TitleAnime ruta='#' name="Youjo senki" />
                    </div>
                </section>

            </section>
        </main>
    );
};



export default ListAnime;
