# AnimeBDRip. ❤️

Una página creada para los amantes del buen anime, esta, simplemente sirve como información sobre anime, sus temporadas, capítulos, películas y demás información respecto a este sin incluir enlaces de descarga por temas de derechos de autor, por lo tanto solo se centra en dar a conocer y brindar información sobre el anime.
>Aunque estos cuentan con enlaces de descargar, estos no se encuentran disponibles por lo ya mencionado posible derechos de autor, alguno llegase a tenerlo es porque se llegó a un acuerdo con alguna página o simplemente adquirí algún tipo de licencia o permiso para distribuirlo.

 <img src="https://raw.githubusercontent.com/juanfed/animeBDRip/main/src/assets/AnimeBDRip.png" alt="AnimeBDRip" />

------------



## Sobre el desarrollo ❔

Este proyecto está construido con [React 19](https://react.dev/ "React"), [React Router 7](https://reactrouter.com/ "React Router") y empaquetado con [Vite](https://vite.dev/ "Vite"). El lenguaje base es JavaScript, HTML y CSS.

------------


### 🚀  **Cómo correrlo en local**

**Requisitos:** [Node.js](https://nodejs.org/) 18 o superior (incluye `npm`).

**Pasos:**

```bash
# 1. Clona el repositorio
git clone https://github.com/juanfed/animeBDRip.git
cd animeBDRip

# 2. Instala las dependencias
npm install

# 3. Arranca el servidor de desarrollo
npm run dev
```

Luego abre en tu navegador: **http://localhost:5173/animeBDRip/**

> El servidor de desarrollo tiene *hot reload*: los cambios en el código se reflejan al instante.

#### 📜 Comandos disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo con hot reload (http://localhost:5173/animeBDRip/) |
| `npm run build` | Genera el build de producción optimizado en `/dist` |
| `npm run preview` | Sirve localmente el build de producción para revisarlo |
| `npm run deploy` | Publica el contenido de `/dist` en GitHub Pages |

#### Backend opcional

La mayoría de los animes usan datos estáticos (`src/data/animes.js`). Algunos pueden enriquecer su ficha desde un backend. Para apuntar a uno, crea un archivo `.env` con:

```
VITE_API_URL=http://localhost:8080
```

Si no hay backend disponible, esas páginas degradan automáticamente a los datos estáticos.

------------

## LICENSE
[MIT](http://https://opensource.org/licenses/MIT "MIT")
------------
(Copyright (c) 2022 - Present, Juan Fernando)
