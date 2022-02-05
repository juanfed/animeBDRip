import React from 'react';
import FichaAnime from '../../components/FichaAnime';
import Imagenes from '../../components/Imagenes';  // importo las imagenes para trabajar con ellas mas facilmente
import FichaSipnosis from '../../components/FichaSipnosis';
import FichaDonwload from '../../components/FichaDonwload';

const SubeteGaFNiHaru = () => {
    return (
        <main>
            <h2>Subete ga F ni haru</h2>
            <FichaAnime rutaCI={Imagenes.subeteGaFNiHaru}
                title='Subete ga F ni haru'
                tem='1'
                cap='11'
                films='---------'
                gen='Misterio, drama'
                estado='Finalizado'
                aud='Japones'
                sub='Español'
                manga='1 Volumen'
            />

            <FichaSipnosis sipnosis="La historia está protagonizada por Sōhei Saikawa, quien es miembro del Laboratorio de Investigación Saikawa, y por Moe Nishinosono, quien es hija de su mentor. Durante un viaje a la isla Himaga, una remota isla en donde se encuentra el Instituto de Investigación Magata, ambos descubren el cadáver de Shiki Magata, una importante investigadora, y juntos trabajan para resolver, lo que parece, un caso de asesinatos en serie."

            sipnosis2=""

            sipnosis3=""
            />

            <FichaDonwload />
        </main>
    );
};

export default SubeteGaFNiHaru;