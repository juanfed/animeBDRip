import React from 'react';
import FichaAnime from '../../components/FichaAnime';
import Imagenes from '../../components/Imagenes';  // importo las imagenes para trabajar con ellas mas facilmente
import FichaSipnosis from '../../components/FichaSipnosis';
import FichaDonwload from '../../components/FichaDonwload';

const Parasyte = () => {
    return (
        <main>
            <h2>Parasyte</h2>
            <FichaAnime rutaCI={Imagenes.parasyte}
                title='Parasyte'
                tem='1'
                cap='24'
                films='2 (live action)'
                gen='Ciencia ficción'
                estado='Finalizado'
                aud='Japones'
                sub='Español'
                manga='10 volumenes'
            />

            <FichaSipnosis sipnosis="Parasyte se centra en un estudiante de secundaria de 17 años llamado Shinichi Izumi, que vive con su madre y su padre en un barrio tranquilo en Fukuyama, Hiroshima , Japón. Una noche, pequeños extraterrestres parecidos a gusanos con cabezas parecidas a taladros llamados Parásitos llegan a la Tierra y se apoderan de los cerebros de sus anfitriones al entrar por sus oídos o narices. Un parásito intenta meterse en la nariz de Shinichi mientras duerme, pero falla cuando Shinichi se despierta y entra en su cuerpo enterrándose en su brazo. En la versión japonesa, toma el control de su mano derecha y se llama Migi (ミ ギ ー) , después de la palabra japonesa para 'derecha'."

            sipnosis2="Debido a que Shinichi pudo evitar que Migi viajara más arriba en su cerebro, ambos seres conservan sus intelectos y personalidades separados. A medida que el dúo se encuentra con otros parásitos, aprovechan su extraña situación y gradualmente forman un fuerte vínculo, trabajando juntos para sobrevivir. Esto les da una ventaja en la lucha contra otros parásitos que atacan con frecuencia a la pareja al darse cuenta de que el cerebro humano de Shinichi todavía está intacto. Shinichi se siente obligado a luchar contra otros parásitos, que devoran a otros miembros de la especie que infectan como alimento, mientras solicita la ayuda de Migi."

            sipnosis3="La serie explora cuestiones filosóficas y psicológicas como el significado de la humanidad, la relación de los humanos con el medio ambiente y otras especies, el papel del instinto y el amor, y el antropocentrismo inherente a la moralidad. La experiencia de Shinichi con Migi hace que se pregunte si la humanidad tiene derecho a reclamar superioridad moral sobre los parásitos, mientras que las experiencias de Migi y Reiko Tamura con humanos hacen que adopten más rasgos humanos, como el amor y el sacrificio."
            />

            <FichaDonwload />
        </main>
    );
};

export default Parasyte;