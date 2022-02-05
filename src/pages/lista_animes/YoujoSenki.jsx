import React from 'react';
import FichaAnime from '../../components/FichaAnime';
import Imagenes from '../../components/Imagenes';  // importo las imagenes para trabajar con ellas mas facilmente
import FichaSipnosis from '../../components/FichaSipnosis';
import FichaDonwload from '../../components/FichaDonwload';

const YoujoSenki = () => {
    return (
        <main>
            <h2>Youjo senki</h2>
            <FichaAnime rutaCI={Imagenes.youjoSenki}
                title='Youjo senki'
                tem='1'
                cap='12'
                films='1'
                gen='Fantasia, militar'
                estado='Finalizado'
                aud='Japones'
                sub='Español'
                manga='12 Volumenes'
            />

            <FichaSipnosis sipnosis="En 2013 de la era moderna de Tokio, un asalariado japonés ateo anónimo , en el momento de ser asesinado por un subordinado descontento a quien había despedido debido a su bajo rendimiento en el trabajo, se enfrenta a una entidad que se declara Dios que condena al asalariado. por no tener 'fe'. El asalariado no cree en su existencia, critica sus diversas afirmaciones desde su perspectiva de ateo y lo denomina burlonamente como 'Ser X'. La entidad decide reencarnar al asalariado en un mundo en el que se enfrentaría a circunstancias lo suficientemente difíciles como para acudir a Ser X en busca de ayuda."

            sipnosis2="El asalariado renace como Tanya Degurechaff, una niña huérfana en el equivalente de una realidad alternativa de la Alemania imperial , conocida como el Imperio, en la que la Primera Guerra Mundial se prolongó hasta la década de 1920. Según Ser X, si Tanya no muere de muerte natural o se niega a tener fe en ella, su alma abandonará el ciclo de la reencarnación y será enviada al infierno .por los innumerables pecados que Tanya ha cometido en su vida anterior. En busca de un escape, Tanya decide unirse al Cuerpo de Magos del Imperio y luchar en la guerra, con la esperanza de alcanzar un rango lo suficientemente alto lo más rápido posible para permanecer lejos del campo de batalla y de esta manera evitar el riesgo de ser asesinada. Incluso si ahora se ve obligada a hablar con los labios de una joven, Tanya pronto se convierte en una soldado despiadada que prioriza la eficiencia y su propia carrera sobre cualquier otra cosa, incluso las vidas de los que están debajo de ella, especialmente aquellos que se ponen de su lado malo."

            sipnosis3=""
            />

            <FichaDonwload />
        </main>
    );
};

export default YoujoSenki;