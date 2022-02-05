import React from 'react';

const FichaSipnosis = ({sipnosis, sipnosis2="", sipnosis3=""}) => {
    return (
        <section class="sipnosis">
            <div class="sipnosis__tittle">
                <h2>Sipnosis</h2>
            </div>
            <div class="sipnosis__paragraph">
                <p>{sipnosis}</p>
                <p>{sipnosis2}</p>
                <p>{sipnosis3}</p>
            </div>
        </section>
    );
};

export default FichaSipnosis;