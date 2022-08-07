import React from 'react';
import FichaAnime from '../../components/FichaAnime';
import Imagenes from '../../components/Imagenes';  // importo las imagenes para trabajar con ellas mas facilmente
import FichaSipnosis from '../../components/FichaSipnosis';
import FichaDonwload from '../../components/FichaDonwload';

const AnoNatsuDeMatteru = () => {
	return (
		<main>
			<h2>Ano natsu de matteru</h2>
			<FichaAnime RutaImagen={Imagenes.anoNatsuDeMatteru}
				title='ano natsu de matteru'
				tem='1'
				cap='12'
				films='---------'
				gen='comedia, romance'
				estado='Finalizado'
				aud='Japones'
				sub='Español'
				manga='3 volumenes'
			/>

			<FichaSipnosis sipnosis="Mientras Kaito Kirishima probaba su cámara de 8 mm en la noche, este queda atrapado en medio de una misteriosa explosión que termina matándolo. Extrañamente, Kaito despierta al día siguiente perfectamente bien, pero sin ningún recuerdo de lo que ocurrió exactamente el día anterior. Sin prestar atención de lo que había sucedido, se dirige a la escuela sin pensar sobre dicho accidente. Conversando con sus amigos en la escuela, deciden hacer una película durante las vacaciones de verano, e invitan a dos estudiantes de cursos superiores para participar en el proyecto: la recién llegada Ichika Takatsuki y la extraña Lemon Yamano. En un extraño giro del destino, Ichika comienza a vivir con Kaito, ya que su hermana debe viajar a Bolivia para trabajar. Sin embargo, Ichika no es una chica normal, no procede de este planeta y oculta su identidad haciéndose pasar por una chica que es del extranjero que ha decidido estudiar en Japón."
			/>

			<FichaDonwload />
		</main>
	);
};

export default AnoNatsuDeMatteru;
