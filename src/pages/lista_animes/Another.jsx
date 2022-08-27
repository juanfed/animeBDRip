import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FichaAnime from '../../components/FichaAnime';
//import Imagenes from '../../components/Imagenes';  // importo las imagenes para trabajar con ellas mas facilmente
import FichaSipnosis from '../../components/FichaSipnosis';

import FichaDonwload from '../../components/FichaDonwload';

// import styles css
import "../../styles/another.css"
import GaleryImagesAnime from '../../components/GaleryImagesAnime';

const Another = () => {
	const [resultado, setResultado] = useState({})
	const [photos, setPhotos] = useState([])

	useEffect(() => {
		const dataAnime = { method: 'GET', url: 'http://localhost:8080/animeBDRip/listAnime/Another' };

		axios.request(dataAnime).then(function (response) {
			setResultado(response.data);
		}).catch(function (error) {
			console.error(error);
		}).then(() => {
			const dataAnimePhoto = { method: 'GET', url: `http://localhost:8080/animeBDRip/listAnime/anime/1` };
			axios.request(dataAnimePhoto).then(function (response) {
				setPhotos(response.data.enlaces.split(","))
				console.log(photos)
			})
		});


		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<main>
			<h2>{resultado.name}</h2>
			<FichaAnime
				RutaImagen={resultado.photos}
				Name={resultado.name}
				Seasons={resultado.seasons}
				Chapters={resultado.chapters}
				Specials={resultado.specials}
				Movies={resultado.movies}
				Gender={resultado.gender}
				StartDate={resultado.start_date}
				EndDate={resultado.end_date}
				State={resultado.state}
				Duration={resultado.duration}
				Audio={resultado.audio}
				Subtitle={resultado.subtitle}
				Password={resultado.password}
				Manga={resultado.manga}
			/>

			<GaleryImagesAnime />

			<FichaSipnosis
				sipnosis={resultado.sipnosis} />

			<FichaDonwload />


		</main>
	);
};

export default Another;
