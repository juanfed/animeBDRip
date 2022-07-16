import React from 'react';

const CardFilm = (title, img) => {
	return (
		<div>
			<h4>{title}</h4>
			<figure>
				<img src={img} alt={title} />
			</figure>
		</div>
	);


};

export default CardFilm;
