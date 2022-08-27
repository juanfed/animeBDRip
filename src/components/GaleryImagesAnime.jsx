import React, { useEffect, useState } from 'react';
import axios from 'axios';

import "../styles/galeryImagesAnime.css"

const GaleryImagesAnime = () => {
	const [photos, setPhotos] = useState([])

	useEffect(() => {
		const dataImages = { method: 'Get', url: `http://localhost:8080/animeBDRip/listAnime/anime/1` };

		axios.request(dataImages).then(function (response) {
			setPhotos(response.data.enlaces.split(","))
		}).catch(function (error) {
			console.log(error);
		})

	}, [])


	return (
		<section className="galery">
			<h3>Galeria de amagenes</h3>
			{photos.map((photo) => (
				<div className="divSectionImagesAnime">
					<figure className="figureSectionImagesAnime">
						<img className="imgSectionImagesAnime" src={photo} alt="" key={photo} />
					</figure>
				</div>
			))}
		</section>
	)
}

export default GaleryImagesAnime