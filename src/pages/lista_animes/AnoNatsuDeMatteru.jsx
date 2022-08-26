import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FichaAnime from '../../components/FichaAnime';
import Imagenes from '../../components/Imagenes';  // importo las imagenes para trabajar con ellas mas facilmente
import FichaSipnosis from '../../components/FichaSipnosis';
import FichaDonwload from '../../components/FichaDonwload';

const AnoNatsuDeMatteru = () => {
	const [resultado, setResultado] = useState({})

	let nombre = "Ano natsu de matteru"

	useEffect(() => {
		const dataAnime = { method: 'GET', url: `http://localhost:8080/animeBDRip/listAnime/${nombre}`};

		axios.request(dataAnime).then(function (response) {
			console.log(response.data);
			setResultado(response.data);
		}).catch(function (error) {
			console.error(error);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<main>
			<h2>Ano natsu de matteru</h2>
			<FichaAnime
				RutaImagen={Imagenes.anoNatsuDeMatteru}
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

			<FichaSipnosis
				sipnosis={resultado.sipnosis} />

			<FichaDonwload />
		</main>
	);
};

export default AnoNatsuDeMatteru;