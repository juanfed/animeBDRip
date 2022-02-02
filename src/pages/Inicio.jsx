import React from 'react';
import '../styles/inicio.css'
import imagenes from '../images/imagenes';

const Inicio = () => {
    return (
        <main>
            <section className="intro">
			<div className="intro__h1">
				<h2>Bienvenidos</h2>
			</div>
			<div className="intro__paragraph">
				<p>Hola a todos esta es una pagina que ando haciendo no solo porque me gusta ver animes, si no por el echo
					de que tambien hago esto para poder afianzar mis conocimientos en <b>programación web</b> y poder
					conseguir trabajo y de paso adquirir más conocimientos y aplicarlos acá, ya que una de mis metas es hacer
					de esta una de las mejores paginas para ver y descargar anime de todo tipo y que sea de agrado de todos
					ustedes. </p>
				<p><b><i>Nota: </i></b>Si tienen alguna sugerencia me la pueden hacer llegar como mensaje en alguna de mis
					redes de contacto que estan al final de esta página, también pueden escribirme por si existe algún link
					caido o quieren que suba algún anime en espesifico</p>
			</div>
		</section>

		<section className="anime">
			<div className="anime__tittle">
				<h2>Animes Agregados</h2>
			</div>


			<div className="cards--anime">

				<div className="card">
					<div className="card__tittle">
						<h3><a href="ListAnime/ano_natsu_de_matteru.html">{imagenes[0].tittle}</a></h3>
					</div>
					<div className="card__img">
						<figure className="card__img--figure">
							<img loading="lazy" src={imagenes[0].name}
								alt="Ano natsu de matteru" />
						</figure>
					</div>
					<div className="card__information">
						<p><b>Capitulos: </b>12</p>
						<p><b>Temporadas: </b>1</p>
					</div>
				</div>

				<div className="card">
					<div className="card__tittle">
						<h3><a href="ListAnime/another.html">{imagenes[1].tittle}</a></h3>
					</div>
					<div className="card__img">
						<figure className="card__img--figure">
							<img loading="lazy" src={imagenes[1].name} alt="another" />
						</figure>
					</div>
					<div className="card__information">
						<p><b>Capitulos: </b>12</p>
						<p><b>Temporadas: </b>1</p>
					</div>
				</div>

				<div className="card">
					<div className="card__tittle">
						<h3><a href="ListAnime/btoom.html">{imagenes[2].tittle}</a></h3>
					</div>
					<div className="card__img">
						<figure className="card__img--figure">
							<img loading="lazy" src={imagenes[2].name} alt="Btooom!" />
						</figure>
					</div>
					<div className="card__information">
						<p><b>Capitulos: </b>12</p>
						<p><b>Temporadas: </b>1</p>
					</div>
				</div>

				<div className="card">
					<div className="card__tittle">
						<h3><a href="ListAnime/deadman_wonderland.html">Deadman wonderland</a></h3>
					</div>
					<div className="card__img">
						<figure className="card__img--figure">
							<img loading="lazy" src="images/images-Anime/deadman-wonderland/deadman-wonderland-01_optimized.jpg" alt="Deadman wonderland" />
						</figure>
					</div>
					<div className="card__information">
						<p><b>Capitulos: </b>12</p>
						<p><b>Temporadas: </b>1</p>
					</div>
				</div>

				<div className="card">
					<div className="card__tittle">
						<h3><a href="ListAnime/gangsta.html">Gangsta</a></h3>
					</div>
					<div className="card__img">
						<figure className="card__img--figure">
							<img loading="lazy" src="images/images-Anime/gangsta/gangsta-01_optimized.jpg" alt="Gansta" />
						</figure>
					</div>
					<div className="card__information">
						<p><b>Capitulos: </b>12</p>
						<p><b>Temporadas: </b>1</p>
					</div>
				</div>

				<div className="card">
					<div className="card__tittle">
						<h3><a href="ListAnime/golden_time.html">Golden time</a></h3>
					</div>
					<div className="card__img">
						<figure className="card__img--figure">
							<img loading="lazy" src="images/images-Anime/golden-time/golden-time-01_optimized.jpg" alt="Golden time" />
						</figure>
					</div>
					<div className="card__information">
						<p><b>Capitulos: </b>12</p>
						<p><b>Temporadas: </b>1</p>
					</div>
				</div>

				<div className="card">
					<div className="card__tittle">
						<h3><a href="ListAnime/inuyashiki.html">Inuyashiki</a></h3>
					</div>
					<div className="card__img">
						<figure className="card__img--figure">
							<img loading="lazy" src="images/images-Anime/inuyashiki/inuyashiki-01_optimized.jpg" alt="Inuyashiki" />
						</figure>
					</div>
					<div className="card__information">
						<p><b>Capitulos: </b>12</p>
						<p><b>Temporadas: </b>1</p>
					</div>
				</div>

				<div className="card">
					<div className="card__tittle">
						<h3><a href="ListAnime/kousetsu_no_kabaneri.html">Kousetsu no kabaneri</a></h3>
					</div>
					<div className="card__img">
						<figure className="card__img--figure">
							<img loading="lazy" src="images/images-Anime/kousetsu-no-kabaneri/kousetsu-no-kabaneri_optimized.jpg" alt="Kousetsu no kabaneri" />
						</figure>
					</div>
					<div className="card__information">
						<p><b>Capitulos: </b>12</p>
						<p><b>Temporadas: </b>1</p>
					</div>
				</div>

				<div className="card">
					<div className="card__tittle">
						<h3><a href="ListAnime/one_punch_man.html">One punch man</a></h3>
					</div>
					<div className="card__img">
						<figure className="card__img--figure">
							<img loading="lazy" src="images/images-Anime/one-punch-man/one-punch-man-01_optimized.jpg" alt="One punch man" />
						</figure>
					</div>
					<div className="card__information">
						<p><b>Capitulos: </b>12</p>
						<p><b>Temporadas: </b>1</p>
					</div>
				</div>

				<div className="card">
					<div className="card__tittle">
						<h3><a href="ListAnime/ookami_shoujo_to_kuro_ouji.html">Ookami shoujo to kuro ouji</a></h3>
					</div>
					<div className="card__img">
						<figure className="card__img--figure">
							<img loading="lazy" src="images/images-Anime/ookami-shoujo-to-kuro-ouji/ookami-shoujo-to-kuro-ouji-01_optimized.jpg"
								alt="Ookami shoujo to kuro ouji" />
						</figure>
					</div>
					<div className="card__information">
						<p><b>Capitulos: </b>12</p>
						<p><b>Temporadas: </b>1</p>
					</div>
				</div>

				<div className="card">
					<div className="card__tittle">
						<h3><a href="ListAnime/parasyte.html">Parasyte</a></h3>
					</div>
					<div className="card__img">
						<figure className="card__img--figure">
							<img loading="lazy" src="images/images-Anime/parasyte/parasyte-01_optimized.jpg" alt="Parasyte" />
						</figure>
					</div>
					<div className="card__information">
						<p><b>Capitulos: </b>12</p>
						<p><b>Temporadas: </b>1</p>
					</div>
				</div>

				<div className="card">
					<div className="card__tittle">
						<h3><a href="ListAnime/re_life.html">Re Life</a></h3>
					</div>
					<div className="card__img">
						<figure className="card__img--figure">
							<img loading="lazy" src="images/images-Anime/re-life/re-life-01_optimized.jpg" alt="Re-Life" />
						</figure>
					</div>
					<div className="card__information">
						<p><b>Capitulos: </b>12</p>
						<p><b>Temporadas: </b>1</p>
					</div>
				</div>

				<div className="card">
					<div className="card__tittle">
						<h3><a href="ListAnime/re_zero.html">Re zero</a></h3>
					</div>
					<div className="card__img">
						<figure className="card__img--figure">
							<img loading="lazy" src="images/images-Anime/re-zero/re-zero-01_optimized.jpg" alt="Re-Zero" />
						</figure>
					</div>
					<div className="card__information">
						<p><b>Capitulos: </b>12</p>
						<p><b>Temporadas: </b>1</p>
					</div>
				</div>

				<div className="card">
					<div className="card__tittle">
						<h3><a href="ListAnime/rokka_no_yuusha.html">Rokka no yuusha</a></h3>
					</div>
					<div className="card__img">
						<figure className="card__img--figure">
							<img loading="lazy" src="images/images-Anime/rokka-no-yuusha/rokka-no-yuusha-01_optimized.jpg" alt="Rokka no yuusha" />
						</figure>
					</div>
					<div className="card__information">
						<p><b>Capitulos: </b>12</p>
						<p><b>Temporadas: </b>1</p>
					</div>
				</div>

				<div className="card">
					<div className="card__tittle">
						<h3><a href="ListAnime/sakurasou_no_pet_na_kanojo.html">Sakurasao no Pet na kanojo</a></h3>
					</div>
					<div className="card__img">
						<figure className="card__img--figure">
							<img loading="lazy" src="images/images-Anime/sakurasou-no-Pet-na-Kanojo/sakurasou-no-pet-na-kanojo-01_optimized.png"
								alt="sakurasou no Pet na Kanojo" />
						</figure>
					</div>
					<div className="card__information">
						<p><b>Capitulos: </b>12</p>
						<p><b>Temporadas: </b>1</p>
					</div>
				</div>

				<div className="card">
					<div className="card__tittle">
						<h3><a href="ListAnime/subete_ga_f_ni_haru.html">Subete ga F ni haru</a></h3>
					</div>
					<div className="card__img">
						<figure className="card__img--figure">
							<img loading="lazy" src="images/images-Anime/subete-ga-F-ni-haru/subete-ga-f-ni-haru-01_optimized.jpg" alt="Subete ga F ni haru" />
						</figure>
					</div>
					<div className="card__information">
						<p><b>Capitulos: </b>12</p>
						<p><b>Temporadas: </b>1</p>
					</div>
				</div>

				<div className="card">
					<div className="card__tittle">
						<h3><a href="ListAnime/youjo_senki.html">Youjo Senki</a></h3>
					</div>
					<div className="card__img">
						<figure className="card__img--figure">
							<img loading="lazy" src="images/images-Anime/youjo-senki/youjo-senki-01_optimized.jpg" alt="Youjo Senki" />
						</figure>
					</div>
					<div className="card__information">
						<p><b>Capitulos: </b>12</p>
						<p><b>Temporadas: </b>1</p>
					</div>
				</div>

			</div>


		</section>

		<section className="newAnimes">
			<div className="newAnimes__tittle">
				<h2>Proximos animes</h2>
			</div>
			<div className="newAnimes__list">
				<h4>Ao no exorcist</h4>
				<h4>Asobi asobase</h4>
				<h4>Banana fish</h4>
				<h4>Break blade</h4>
				<h4>Devil may cry</h4>
				<h4>Goblin slayer</h4>
				<h4>Hunter x Hunter 2011</h4>
				<h4>Jujutsu kaisen</h4>
				<h4>Moyoiga</h4>
				<h4>Mirenai niki</h4>
				<h4>Mob psycho 100</h4>
				<h4>No game no life</h4>
				<h4>Psycho-pass</h4>
				<h4>Tsurezure children</h4>
				<h4>Zetman</h4>
			</div>
		</section>
        </main>
    );
};

export default Inicio;
