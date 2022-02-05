import React from 'react';
import FichaAnime from '../../components/FichaAnime';
import Imagenes from '../../components/Imagenes';  // importo las imagenes para trabajar con ellas mas facilmente
import FichaSipnosis from '../../components/FichaSipnosis';
import FichaDonwload from '../../components/FichaDonwload';

const ReZero = () => {
    return (
        <main>
            <h2>Re Zero</h2>
            <FichaAnime rutaCI={Imagenes.reZero}
                title='Re Zero'
                tem='2'
                cap='25'
                films='---------'
                gen='Acción, aventura'
                estado='Finalizado'
                aud='Japones'
                sub='Español'
                manga='6 Volumenes'
            />

            <FichaSipnosis sipnosis="Subaru Natsuki es un hikikomori que saliendo de una tienda de conveniencia es transportado misteriosamente a un reino de otro mundo, donde lo primero que le ocurre es encontrarse con unos bandidos; sin embargo, lo rescata una hermosa chica semi-elfa de cabello plateado llamada 'Satella'. Como pago decide ayudarla con un problema que ignoró por ayudarle. Sin embargo, pronto la chica muere y el mismo Subaru es herido mortalmente cuando le dice: 'Te prometo que te salvaré'. Entonces, el chico muere pero de pronto el tiempo se rebobina y se encuentra en el mismo punto en el que comenzó, lo que nombra 'Retorno de la Muerte'. Sin embargo, al reencontrarse con 'Satella' ella le reclama no llamarla como la Bruja de los Celos, por lo que allí es cuando, Subaru vuelve a querer ayudarla, pero confundido termina haciendo todo por su cuenta intentando salvar a la chica de su atacante, ¿Quien es 'Satella'? ¿Por qué Subaru fue transportado a ese mundo? ¿Por qué solo él recuerda lo ocurrido en bucles anteriores? Él mismo tendrá que volver una y otra vez de la muerte para descubrirlo y además salvar a los que quiere con el poder otorgado por la Bruja, que quiere mantener sus retornos como un secreto entre ambos."

            sipnosis2=""

            sipnosis3=""
            />

            <FichaDonwload />
        </main>
    );
};

export default ReZero;