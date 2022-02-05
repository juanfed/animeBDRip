import React from 'react';
import FichaAnime from '../../components/FichaAnime';
import Imagenes from '../../components/Imagenes';  // importo las imagenes para trabajar con ellas mas facilmente
import FichaSipnosis from '../../components/FichaSipnosis';
import FichaDonwload from '../../components/FichaDonwload';

const ReLife = () => {
    return (
        <main>
            <h2>Re Life</h2>
            <FichaAnime rutaCI={Imagenes.reLife}
                title='Re Life'
                tem='1'
                cap='13'
                films='---------'
                gen='Secundaria, hist. vida'
                estado='Finalizado'
                aud='Japones'
                sub='Español'
                manga='15 Volumenes'
            />

            <FichaSipnosis sipnosis="La historia gira en torno a Arata Kaizaki, de 27 años, un NINI que ha estado desempleado [también miente sobre tener un trabajo] durante varios años; solo trabaja a tiempo parcial en una tienda de conveniencia. Un día, un hombre misterioso llamado Ryō Yoake le ofrece una oportunidad de trabajo; pero primero, Kaizaki necesita convertirse en probador de ReLife: un experimento científico para hacerlo parecer 10 años más joven y enviarlo de regreso a la escuela secundaria como estudiante. Se supone que el experimento brinda la oportunidad de experimentar la juventud una vez más y, en el proceso, arreglar cualquier problema en la vida del sujeto."

            sipnosis2=""

            sipnosis3=""
            />

            <FichaDonwload />
        </main>
    );
};

export default ReLife;