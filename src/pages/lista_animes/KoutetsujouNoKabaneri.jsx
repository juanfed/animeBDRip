import React from 'react';
import FichaAnime from '../../components/FichaAnime';
import Imagenes from '../../components/Imagenes';  // importo las imagenes para trabajar con ellas mas facilmente
import FichaSipnosis from '../../components/FichaSipnosis';
import FichaDonwload from '../../components/FichaDonwload';

const KoutetsuNoKabaneri= () => {
    return (
        <main>
            <h2>koutetsu no kanaberi</h2>
            <FichaAnime rutaCI={Imagenes.kousetsuNoKabaneri}
                title='Koutetsu No Kabaneri'
                tem='1'
                cap='12'
                films='3'
                gen='Fantasia, Steampunk'
                estado='Finalizado'
                aud='Japones'
                sub='Español'
                manga='4 Volumenes'
            />

            <FichaSipnosis sipnosis="Un virus misterioso aparece durante la Revolución Industrial que transforma a los humanos infectados en Kabane (かばね, 'cadáveres') y se propaga rápidamente. Los Kabane son criaturas no muertas agresivas que no pueden ser derrotadas a menos que se perfore el corazón dorado brillante, que está protegido por una capa de hierro, o se corte por completo una parte importante del cuerpo (como la cabeza). Desafortunadamente, la mayoría de las armas cuerpo a cuerpo y las pistolas de vapor a presión utilizadas por los bushi ('guerreros') no son muy efectivas contra ellos."

            sipnosis2="En el país insular Hinomoto, la gente ha construido 'estaciones' parecidas a fortalezas para protegerse de estas criaturas. Las personas acceden a las estaciones y transportan mercancías entre ellas con la ayuda de locomotoras de vapor fortificadas (hayajirō ) . Un día, un hayajirō secuestrado por el kabane choca contra la estación Aragane y invaden la ciudad. Un joven ingeniero llamado Ikoma aprovecha la oportunidad para probar con éxito su arma anti -kabane , la 'pistola perforante' (tsuranuki zutsu ), pero se infecta en el proceso, aunque logra resistir el virus y convertirse en un Kabaneri , un híbrido humano -kabane . Con la ayuda de Mūmei ('Sin nombre') , otro Kabaneri que aparece para ayudarlos, Ikoma y los otros sobrevivientes de la estación abordan un hayajirō llamado Kōtetsujō ('Fortaleza de hierro') y parten para buscar refugio en otro lugar, luchando. las hordas de kabane a lo largo del camino."

            sipnosis3=""
            />

            <FichaDonwload />
        </main>
    );
};

export default KoutetsuNoKabaneri;