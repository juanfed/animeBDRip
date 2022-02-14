import React from 'react';
import arriety from '../images/images-Films/arrietty/arrietty.jpg';
import '../styles/cardFilms.css';

const ListFilms = () => {
  return (
    <main>
      <h2>Listado de peliculas</h2>
      <section className='listFilms'>
        <h3 className='listFilms--letter'>A</h3>
        <div className='lisFilms__card'>
          <h4 className='listFilms__card--title'>Arritey en el mundo de los diminutos</h4>
          <div className='listFilms__card--div'>
            <figure className='listFilms__card--figure'>
              <img src={arriety} alt="" />
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ListFilms;
