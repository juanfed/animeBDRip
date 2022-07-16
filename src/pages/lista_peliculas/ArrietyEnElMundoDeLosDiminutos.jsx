import React from 'react'
import arriety from '../../images/images-Films/arrietty/arrietty.jpg';

const ArrietyEnElMundoDeLosDiminutos = () => {
	return (
		<>
			<div className='lisFilms__card'>
				<h4 className='listFilms__card--title'>Arritey en el mundo de los diminutos</h4>
				<div className='listFilms__card--div'>
					<figure className='listFilms__card--figure'>
						<img src={arriety} alt="imagen portada arriety" />
					</figure>
				</div>
			</div>
		</>
	)
}

export default ArrietyEnElMundoDeLosDiminutos