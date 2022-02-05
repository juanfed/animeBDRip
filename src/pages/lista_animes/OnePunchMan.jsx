import React from 'react';
import FichaAnime from '../../components/FichaAnime';
import Imagenes from '../../components/Imagenes';  // importo las imagenes para trabajar con ellas mas facilmente
import FichaSipnosis from '../../components/FichaSipnosis';
import FichaDonwload from '../../components/FichaDonwload';

const OnePunchMan = () => {
    return (
        <main>
            <h2>One Punch Man</h2>
            <FichaAnime rutaCI={Imagenes.onePunchMan}
                title='One Punch Man'
                tem='2'
                cap='12'
                films='---------'
                gen='Acción, comedia'
                estado='Finalizado'
                aud='Japones'
                sub='Español'
                manga='24 Volumenes'
            />

            <FichaSipnosis sipnosis="En un supercontinente Tierra, poderosos monstruos y villanos han estado causando estragos en las ciudades. En respuesta, el millonario Agoni crea la Asociación de Héroes , que emplea superhéroes para luchar contra el mal. Saitama , un héroe no asociado, proviene de Ciudad Z y realiza actos heroicos como pasatiempo. Se ha entrenado hasta el punto de ser capaz de derrotar a cualquier enemigo con un solo golpe, pero su fuerza inigualable lo ha dejado con una abrumadora sensación de aburrimiento. Saitama eventualmente se convierte en un mentor reacio para Genos, un cyborg que busca venganza contra otro cyborg que mató a su familia y destruyó su ciudad natal. Saitama y Genos se unen a la Asociación de Héroes, pero debido a una puntuación baja en el examen de entrada escrito, Saitama se coloca en un rango de entrada bajo y sus hazañas pasan desapercibidas y no apreciadas por el público."

            sipnosis2=""

            sipnosis3=""
            />

            <FichaDonwload />
        </main>
    );
};

export default OnePunchMan;