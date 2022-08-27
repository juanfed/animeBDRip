import '../styles/anime.css'; // cargará con todo el css de todos los animes
const FichaAnime = ({
	RutaImagen,
	Name,
	Seasons,
	Chapters,
	Specials,
	Movies,
	Gender,
	StartDate,
	EndDate,
	State,
	Duration,
	Audio,
	Subtitle,
	Password,
	Manga, }) => {
	return (
		<section className="info">
			<div className="info__imgPortada">
				<figure>
					<img src={RutaImagen} alt={Name} /> {/* nombre capeta e imagen */}
				</figure>
			</div>

			<div className="info__ficha">
				<div className="info__ficha--tittle">
					<h3>Ficha Tecnica</h3>
				</div>
				<div className="info__ficha--datos">
					<p><b>Temporadas: </b>{Seasons}</p>
					<p><b>Capitulos: </b>{Chapters}</p>
					<p><b>Especiales: </b>{Specials}</p>
					<p><b>Peliculas: </b>{Movies}</p>
					<p><b>Género: </b>{Gender}</p>
					<p><b>Fecha emición: </b>{StartDate}</p>
					<p><b>Fin emición: </b>{EndDate}</p>
					<p><b>Estado: </b>{State}</p>
					<p><b>Duracion: </b>{Duration}</p>
					<p><b>Audio: </b>{Audio}</p>
					<p><b>Subtitulos: </b>{Subtitle}</p>
					<p><b>Contraseña: </b>{Password}</p>
					<p><b>Manga: </b>{Manga}</p>
				</div>
			</div>
		</section>
	)
};

export default FichaAnime;