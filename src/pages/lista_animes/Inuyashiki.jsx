import React from 'react';
import FichaAnime from '../../components/FichaAnime';
import Imagenes from '../../components/Imagenes';  // importo las imagenes para trabajar con ellas mas facilmente
import FichaSipnosis from '../../components/FichaSipnosis';
import FichaDonwload from '../../components/FichaDonwload';

const Inuyashiki = () => {
    return (
        <main>
            <h2>Inuyashiki</h2>
            <FichaAnime rutaCI={Imagenes.inuyashiki}
                title='Inuyashiki'
                tem='1'
                cap='11'
                films='---------'
                gen='Ciencia ficción'
                estado='Finalizado'
                aud='Japones'
                sub='Español'
                manga='10 volumenes'
            />

            <FichaSipnosis sipnosis="Inuyashiki Ichiro es un hombre mayor, sin amigos, con una familia indiferente. Una noche fatídica en un parque público casi vacío, es golpeado por una explosión de origen extraterrestre, y su cuerpo es reemplazado por un cuerpo mecánico increíblemente poderoso, pero aparentemente humano. Rápidamente se da cuenta del alcance de los poderes de su cuerpo, y después de salvar a un vagabundo golpeado por un grupo de adolescentes, decide dedicarse a hacer el bien, usando sus poderes para curar a aquellos con enfermedades incurables y luchar contra el crimen."

            sipnosis2="Sin embargo, un adolescente que estaba con él en el momento de la explosión, Shishigami Hiro, tuvo el mismo destino que Ichiro, pero a diferencia de Inuyashiki, Shishigami se convierte en un psicópata que usa sus nuevas habilidades para asesinar a varias personas, desde compañeros de clase que lo molestan. a familias inocentes, incluidos niños pequeños, solo por diversión. Sus actos de crueldad despiadada atraen la atención de la policía, que no puede hacer nada para detenerlo. Hiro se convierte en el criminal más buscado del país."

            sipnosis3="La serie sigue a estas dos personas diferentes que una vez compartieron la misma experiencia extraña, ya que sus caminos están destinados a chocar."
            />

            <FichaDonwload />
        </main>
    );
};

export default Inuyashiki;