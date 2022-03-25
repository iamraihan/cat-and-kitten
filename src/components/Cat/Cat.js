import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cat.css'

const Cat = ({ cat }) => {
    console.log(cat);
    const { name, image, price, } = cat
    return (
        <div className='card'>
            <div className="card-img">
                <img src={image} alt="" />
            </div>
            <h3>{name}</h3>
            <p>Price: ${price}  </p>
            <button>Add To Cart <FontAwesomeIcon className='icon' icon={faShoppingCart}></FontAwesomeIcon></button>
        </div>
    );
};

export default Cat;