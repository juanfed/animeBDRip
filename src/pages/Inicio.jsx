import React from 'react';
import '../styles/inicio.css'  //aca tambien estan los estilos del copoente CardAnime
import imagenes from '../images/imagenes';		//importo las imagenes para las card
import CardAnime from '../components/CardAnime';

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
					<CardAnime ruta="#" title="Ano natsu de matteru" imagen={imagenes.anoNatsuDeMatteru} cap="12 + Ova" tem="1" />
					<CardAnime ruta="#" title="Another" imagen={imagenes.another} cap="12" tem="1 + Ova" />
					<CardAnime ruta="#" title="Btooom!" imagen={imagenes.btoom} cap="12" tem="1" />
					<CardAnime ruta="#" title="Deadman wonderland" imagen={imagenes.deadmanWonderland} cap="12" tem="1 + Ova" />
					<CardAnime ruta="#" title="Gangsta" imagen={imagenes.gangsta} cap="12" tem="1" />
					<CardAnime ruta="#" title="Golden time" imagen={imagenes.goldenTime} cap="24" tem="1" />
					<CardAnime ruta="#" title="Inuyashiki" imagen={imagenes.inuyashiki} cap="12" tem="1" />
					<CardAnime ruta="#" title="Kousetsu no kabaneri" imagen={imagenes.kousetsuNoKabaneri} cap="12" tem="1 + 3 Films" />
					<CardAnime ruta="#" title="One punch man" imagen={imagenes.onePunchMan} cap="12" tem="2" />
					<CardAnime ruta="#" title="Ookami shoujo to kuro ouji" imagen={imagenes.ookamiShoujoToKuroOuji} cap="12" tem="1" />
					<CardAnime ruta="#" title="Parasyte" imagen={imagenes.parasyte} cap="24" tem="1" />
					<CardAnime ruta="#" title="Re Life" imagen={imagenes.reLife} cap="13" tem="1 + 4 Ovas" />
					<CardAnime ruta="#" title="Re zero" imagen={imagenes.reZero} cap="25" tem="2" />
					<CardAnime ruta="#" title="Rokka no yuusha" imagen={imagenes.rokkaNoYuusha} cap="12" tem="1" />
					<CardAnime ruta="#" title="Sakurasou no Pet na kanojo" imagen={imagenes.sakurasouNoPetNaKanojo} cap="24" tem="1" />
					<CardAnime ruta="#" title="Subete ga F ni haru" imagen={imagenes.subeteGaFNiHaru} cap="11" tem="1" />
					<CardAnime ruta="#" title="Youjo senki" imagen={imagenes.youjoSenki} cap="12" tem="1" />
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
