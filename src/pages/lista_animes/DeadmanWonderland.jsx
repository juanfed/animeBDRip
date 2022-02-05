import React from 'react';
import FichaAnime from '../../components/FichaAnime';
import Imagenes from '../../components/Imagenes';  // importo las imagenes para trabajar con ellas mas facilmente
import FichaSipnosis from '../../components/FichaSipnosis';
import FichaDonwload from '../../components/FichaDonwload';

const DeadmanWonderland = () => {
    return (
        <main>
            <h2>Deadman Wonderland</h2>
            <FichaAnime rutaCI={Imagenes.deadmanWonderland}
                title='Deadman Wonderland'
                tem='1'
                cap='12 + ova'
                films='---------'
                gen='Acción, triller'
                estado='Finalizado'
                aud='Japones'
                sub='Español'
                manga='13 volumenes'
            />

            <FichaSipnosis sipnosis="Una anomalía masiva provocó un gran terremoto que asoló el territorio continental de Japón y destruyó la mayor parte de Tokio , hundiendo tres cuartas partes de la ciudad en el Océano Pacífico ."

            sipnosis2="Diez años después, la historia cambia a Ganta Igarashi, un estudiante aparentemente ordinario que asiste a la escuela secundaria de la prefectura de Nagano. Como fugitivo , sobreviviente del gran terremoto, Ganta no tiene recuerdos de la tragedia y ha vivido una vida normal. Todo esto cambia cuando una persona extraña cubierta de sangre y una armadura carmesí flota a través de las ventanas de su salón de clases. Sonriendo locamente, el 'Hombre Rojo' masacra a toda la clase de Ganta. En lugar de matarlo, el 'Hombre Rojo' incrusta un fragmento de cristal rojo en el pecho de Ganta. A los pocos días de la masacre, Ganta es juzgado como sospechoso. Debido a las pruebas amañadas en su contra, es condenado a muerte en Deadman Wonderland , una prisiónque también funciona como un parque temático y está dirigido por el director Tsunenaga Tamaki (quien se hizo pasar por el abogado de Ganta y fue secretamente responsable de las pruebas manipuladas en su contra)."

            sipnosis3="Al llegar a la prisión, a Ganta se le coloca un collar especial que controla su ubicación y signos vitales. Se le inyecta constantemente un veneno letal en el torrente sanguíneo a través del collar, pero se puede neutralizar consumiendo una peculiar medicina parecida a un caramelo cada tres días, que se puede adquirir a través de diversas actividades en la prisión, por ejemplo, actuar ante el público, trabajar entre bastidores y comprar con Cast Points (una forma de moneda entre los reclusos en Deadman Wonderland). Para acumular Cast Points, un recluso debe actuar en los juegos letales de la instalación y sobrevivir. Afortunadamente para Ganta, cuenta con la ayuda de una misteriosa chica albina llamada Shiro que aparentemente conoce a Ganta pero cuya existencia desconocen los otros prisioneros.
            
            Mientras intenta sobrevivir como preso en el corredor de la muerte, Ganta tiene la intención de encontrar al 'Hombre Rojo' para limpiar su nombre. En un extraño giro, Ganta comienza a desarrollar la habilidad de manipular su propia sangre, hasta el punto de convertirla en un arma. Desconocido para Ganta, se ha convertido en uno de los Hombres Muertos' de la prisión, un grupo aislado de prisioneros que poseen las Ramas del Pecado .que es una habilidad que los hace capaces de controlar su sangre para sus propios usos. Después de que se descubre su habilidad, Ganta se ve obligado a participar en brutales combates a muerte de gladiadores conocidos como Carnival Corpse, cuyos espectadores anónimos pagan grandes cantidades de dinero para verlos. En su larga lucha por sobrevivir, se las arregla para hacerse amigo de algunos de los que luchó en la arena y con su ayuda, Ganta continúa su búsqueda para descubrir la identidad del 'Hombre Rojo', por qué se convirtió en un Deadman, y la oscuridad. secretos que esconden las autoridades penitenciarias."
            />

            <FichaDonwload />
        </main>
    );
};

export default DeadmanWonderland;