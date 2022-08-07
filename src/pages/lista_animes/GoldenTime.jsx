import React from 'react';
import FichaAnime from '../../components/FichaAnime';
import Imagenes from '../../components/Imagenes';  // importo las imagenes para trabajar con ellas mas facilmente
import FichaSipnosis from '../../components/FichaSipnosis';
import FichaDonwload from '../../components/FichaDonwload';

const GoldenTime = () => {
	return (
		<main>
			<h2>Golden Time</h2>
			<FichaAnime rutaCI={Imagenes.goldenTime}
				title='Golden Time'
				tem='1'
				cap='24'
				films='---------'
				gen='Comedia romántica'
				estado='Finalizado'
				aud='Japones'
				sub='Español'
				manga='9 volumenes'
			/>

			<FichaSipnosis sipnosis="Banri Tada es un estudiante varón recién admitido en una facultad de derecho privada en Tokio. Debido a las secuelas de una caída desde un puente poco después de graduarse de la escuela secundaria, ha perdido todos sus recuerdos antes del accidente ( amnesia retrógrada)."

				sipnosis2="Banri se encuentra total y absolutamente perdido después del gran evento ceremonial de apertura e intenta encontrar su camino hacia la orientación para estudiantes de primer año. En el camino, se encuentra con otro estudiante de primer año perdido y confundido de la misma escuela, Mitsuo Yanagisawa, e inmediatamente se llevan bien. De alguna manera, al llegar a su objetivo previsto justo a tiempo, aparece frente a ellos una hermosa niña que sostiene un ramo de rosas, que felicita a Mitsuo por ingresar a la escuela y luego lo golpea en la cara con ellos antes de arrojar el ramo en su regazo y irse. . Se revela que esta mujer elegante, bien vestida y obsesiva es la amiga de la infancia de Mitsuo, Koko Kaga. Cuando eran niños, se habían prometido casarse algún día, algo que ella se ha tomado muy en serio todo este tiempo."

				sipnosis3="Banri conoce a una estudiante de segundo año llamada Linda; sin que él lo supiera, ella era su mejor amiga en la escuela secundaria y se considera responsable de su pérdida de memoria. A medida que avanza la serie, Banri lidia con sus recuerdos que resurgen lentamente, que a menudo entran en conflicto con una relación que florece entre él y Kaga."
			/>

			<FichaDonwload />
		</main>
	);
};

export default GoldenTime;