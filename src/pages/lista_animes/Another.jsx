import React from 'react';
import FichaAnime from '../../components/FichaAnime';
import Imagenes from '../../components/Imagenes';  // importo las imagenes para trabajar con ellas mas facilmente
import FichaSipnosis from '../../components/FichaSipnosis';


import FichaDonwload from '../../components/FichaDonwload';

const Another = () => {
    return (
        <main>
            <h2>Another</h2>
            <FichaAnime rutaCI={Imagenes.another}
                title='Another'
                tem='1'
                cap='12'
                films='---------'
                gen='Horror, misterio'
                estado='Finalizado'
                aud='Japones'
                sub='Español'
                manga='4 volumenes'
            />

            <FichaSipnosis sipnosis="En 1972, un popular y carismático estudiante llamado Misaki Yomiyama perteneciente a la clase 3-3 de la escuela Yomiyama del Norte, murió repentinamente a mitad del año escolar. Devastados por la pérdida, sus compañeros y maestro actuaron como si Misaki todavía estuviese vivo e incluso reservaron un lugar para él en la ceremonia de graduación. Lo que fue aún más elocuente, fue que Misaki apareció en la fotografía de la graduación."

            sipnosis2="En la primavera de 1998, el estudiante de noveno año Kōichi Sakakibara se traslada de Tokio a Yomiyama, la ciudad natal de su fallecida madre, debido a que su padre ha ido a trabajar en una investigación a la India. Su traslado fue a la escuela Yomiyama del Norte (Yomikita Chūgakkō) en la clase 3-3. A causa de un neumotórax, Kōichi tuvo que ser hospitalizado justo antes de comenzar las clases. Durante su hospitalización los representantes de la clase, Tomohiko Kazami y Yukari Sakuragi, le visitan y dan la bienvenida a la escuela, aunque de una manera muy sombría."

            sipnosis3="Kōichi finalmente es dado de alta y es capaz de asistir a clases, donde pronto trata de adaptarse a su nuevo ámbito escolar. Sin embargo, no puede dejar de notar el extraño comportamiento de sus compañeros. También descubre que Mei Misaki, una muchacha a la que conoció durante su estadía en el hospital, pertenece a su misma clase, pero el escritorio que utiliza se ve bastante viejo y diferente al del resto de la clase. Mei también siempre esta sola y nadie parece preocuparse por su presencia o tratar de hablar con ella. Inicialmente, Kōichi cree que es un caso de acoso escolar, pero pronto se da cuenta de que incluso los empleados y profesores de la escuela actúan de la misma manera. El ambiente algo aterrador en su nueva clase parece tener un oscuro secreto que ninguno de sus compañeros de clase quiere revelar y que podría estar relacionado con el 'Misaki de 1972'"
            />

            <FichaDonwload />
        </main>
    );
};

export default Another;
