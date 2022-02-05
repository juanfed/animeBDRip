import React from 'react';
import FichaAnime from '../../components/FichaAnime';
import Imagenes from '../../components/Imagenes';  // importo las imagenes para trabajar con ellas mas facilmente
import FichaSipnosis from '../../components/FichaSipnosis';
import FichaDonwload from '../../components/FichaDonwload';

const SakurasouNoPetNaKanojo = () => {
    return (
        <main>
            <h2>Sakurasou no Pet na kanojo</h2>
            <FichaAnime rutaCI={Imagenes.sakurasouNoPetNaKanojo}
                title='Sakurasou no Pet na kanojo<'
                tem='1'
                cap='24'
                films='---------'
                gen='Comedia, romántica'
                estado='Finalizado'
                aud='Japones'
                sub='Español'
                manga='8 Volumenes'
            />

            <FichaSipnosis sipnosis="Sakura Dormitory es un dormitorio de la escuela secundaria afiliada a la Universidad de las Artes de Suimei (a menudo abreviada como Suiko), que alberga a los estudiantes más extraños y problemáticos. Después de ser expulsado del dormitorio normal por tener un gato callejero, Sorata Kanda se muda al dormitorio Sakura. A medida que comienza a acostumbrarse a la vida en el dormitorio, Mashiro Shiina, una artista de fama mundial que ni siquiera puede hacerse cargo de su vida diaria, se muda. Sorata se ve obligado a convertirse en el cuidador de Mashiro. La historia es sobre su vida diaria, así como el crecimiento mental."

            sipnosis2=""

            sipnosis3=""
            />

            <FichaDonwload />
        </main>
    );
};

export default SakurasouNoPetNaKanojo;