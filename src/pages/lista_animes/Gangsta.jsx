import React from 'react';
import FichaAnime from '../../components/FichaAnime';
import Imagenes from '../../components/Imagenes';  // importo las imagenes para trabajar con ellas mas facilmente
import FichaSipnosis from '../../components/FichaSipnosis';
import FichaDonwload from '../../components/FichaDonwload';

const Gangsta = () => {
	return (
		<main>
			<h2>Gangsta</h2>
			<FichaAnime rutaCI={Imagenes.gangsta}
				title='Gangsta'
				tem='1'
				cap='12'
				films='---------'
				gen='Aventura, triller'
				estado='Finalizado'
				aud='Japones'
				sub='Español'
				manga='8 volumenes'
			/>

			<FichaSipnosis sipnosis="La serie gira en torno a dos 'Manitas' que aceptan trabajos tanto para la mafia como para la fuerza policial que nadie más puede manejar. Los dos, llamados Worick Arcangelo y Nicolas Brown, trabajan en el pueblo de Ergastulum, que está lleno de mafia , matones, prostitutas y policías corruptos . Después de un trabajo de aplastar a una pandilla, Worick decidió ahorrar y ayudar al único sobreviviente (amnésico), Alex, bajo su protección por el momento."

				sipnosis2=""

				sipnosis3=""
			/>

			<FichaDonwload />
		</main>
	);
};

export default Gangsta;