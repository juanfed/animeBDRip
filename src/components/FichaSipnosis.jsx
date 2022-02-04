import React from 'react';

const FichaSipnosis = ({sipnosis}) => {
    return (
        <section class="sipnosis">
            <div class="sipnosis__tittle">
                <h2>Sipnosis</h2>
            </div>
            <div class="sipnosis__paragraph">
                <p>{sipnosis}</p>
            </div>
        </section>
    );
};

export default FichaSipnosis;