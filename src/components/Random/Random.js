import React from 'react';
import './Random.css'

const Random = ({ randomCat }) => {
    const { image, name, price } = randomCat
    return (
        <div className='random-cat'>
            <img src={image} alt="" />
            <h2>{name}</h2>
            <h3>${price}</h3>
        </div>
    );
};

export default Random;