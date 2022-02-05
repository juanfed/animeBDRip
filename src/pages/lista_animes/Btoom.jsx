import React from 'react';
import FichaAnime from '../../components/FichaAnime';
import Imagenes from '../../components/Imagenes';  // importo las imagenes para trabajar con ellas mas facilmente
import FichaSipnosis from '../../components/FichaSipnosis';
import FichaDonwload from '../../components/FichaDonwload';

const Btoom = () => {
    return (
        <main>
            <h2>Btoom!</h2>
            <FichaAnime rutaCI={Imagenes.btoom}
                title='Btooom!'
                tem='1'
                cap='12'
                films='---------'
                gen='Acción, survival'
                estado='Finalizado'
                aud='Japones'
                sub='Español'
                manga='4 volumenes'
            />

            <FichaSipnosis sipnosis="Ryōta Sakamoto es un joven desempleado de 22 años que vive con su madre Yukie. ¡Es uno de los mejores jugadores del mundo del videojuego de combate llamado Btooom! [3] Un día, se despierta en lo que parece ser una isla tropical, aunque no recuerda cómo o por qué ha sido transportado allí. Mientras deambula, Ryōta ve a alguien y pide ayuda. El extraño responde arrojándole una bomba. Ryōta pronto se da cuenta de que su vida está en peligro y que de alguna manera ha quedado atrapado en una versión de la vida real de su juego favorito. En el juego, Ryōta conoce a Himiko, ¡que es otro Btooom! jugador, y la esposa de Ryōta en el juego."
            />

            <FichaDonwload />
        </main>
    );
};

export default Btoom;