import React from 'react';
import FichaAnime from '../../components/FichaAnime';
import Imagenes from '../../components/Imagenes';  // importo las imagenes para trabajar con ellas mas facilmente
import FichaSipnosis from '../../components/FichaSipnosis';
import FichaDonwload from '../../components/FichaDonwload';

const RokkaNoYuusha = () => {
    return (
        <main>
            <h2>Rokka no yuusha</h2>
            <FichaAnime rutaCI={Imagenes.rokkaNoYuusha}
                title='Rokka no yuusha'
                tem='1'
                cap='12'
                films='---------'
                gen='Acción, aventura, magia'
                estado='Finalizado'
                aud='Japones'
                sub='Español'
                manga='6 Volumenes'
            />

            <FichaSipnosis sipnosis="En un mundo de fantasía en el cual los seis héroes elegidos por los Dioses del Destino deben luchar contra el demonio que ha revivido desde las profundidades del infierno, Adlet, dice ser el más fuerte del mundo. Adlet es uno de los elegidos, los Héroes de las seis flores, pero cuál es la sorpresa de todos los valientes elegidos al ver que no son seis, sino siete. En el bosque, los siete temen de que el enemigo esté entre ellos y el principal blanco de las sospechas es el propio Adlet."

            sipnosis2=""

            sipnosis3=""
            />

            <FichaDonwload />
        </main>
    );
};

export default RokkaNoYuusha;