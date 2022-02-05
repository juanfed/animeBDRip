import React from 'react';
import FichaAnime from '../../components/FichaAnime';
import Imagenes from '../../components/Imagenes';  // importo las imagenes para trabajar con ellas mas facilmente
import FichaSipnosis from '../../components/FichaSipnosis';
import FichaDonwload from '../../components/FichaDonwload';

const OokamiShoujoToKuroOuji = () => {
    return (
        <main>
            <h2>Ookami shoujo to kuro ouji</h2>
            <FichaAnime rutaCI={Imagenes.ookamiShoujoToKuroOuji}
                title='Ookami shoujo to kuro ouji'
                tem='1'
                cap='12 + ova'
                films='---------'
                gen='Comedia romaántica'
                estado='Finalizado'
                aud='Japones'
                sub='Español'
                manga='16 volumenes'
            />

            <FichaSipnosis sipnosis="Erika Shinohara es una estudiante de secundaria que quiere desesperadamente encajar en una camarilla para no sentirse sola. Sin embargo, debido a que su camarilla está formada por chicas que tienen novios, tiene que recurrir a mentir sobre tener uno. Para hacerlos más auténticos, Erika toma una foto de un chico al azar en la calle. Desafortunadamente, el chico, Kyoya Sata, resulta ser el chico más popular de su escuela. Erika le pide que pretenda ser su novio, a lo que él accede con una condición: que ella se convierta en su 'chica lobo' actuando como una mascota para él."

            sipnosis2="Para su consternación, Erika descubre que Kyoya tiene un corazón mucho más oscuro que la personalidad 'principesca' que finge hacia los demás; con frecuencia da sarcasmos, insultos y, en general, tiene una visión cínica del mundo. A pesar de esto, Erika se siente atraída lentamente y finalmente se enamora de él. Kyoya, a su vez, se ablanda y descubre que él también se siente atraído por ella, algo que se consolida cuando Erika deja de ser la Chica Lobo después de un malentendido, a lo que él responde 'promoviéndola' para que se convierta en su novia real."

            sipnosis3="Erika y Kyoya atraviesan sus años de escuela secundaria como pareja mientras enfrentan muchos desafíos, incluidos rivales amorosos entre sí, malentendidos y celos. También aprenden a comprender y cambiar en beneficio de los demás. En el proceso, se hacen amigos de tres personas que forman parte de un grupo: la mejor amiga autosuficiente de Erika, Ayumi Sanda; el mejor amigo apasionado de Kyoya, Takeru Hibiya; y la extravagante Nozomi Kamiya, quien se convierte en su compañera de clase durante su segundo año. Cerca del final de la serie, la pareja también tiene que enfrentar la verdad de una relación a larga distancia cuando Erika tiene que mudarse a Kioto para asistir a una escuela vocacional de fabricación de vidrio ; los dos finalmente deciden resolverlo de alguna manera.
            
            Siete años después de graduarse, el grupo ha logrado cada una de sus profesiones preferidas, y Erika se convirtió en vidriera. También se ha casado con Kyoya, con quien tiene una hija, Yuina."
            />

            <FichaDonwload />
        </main>
    );
};

export default OokamiShoujoToKuroOuji;