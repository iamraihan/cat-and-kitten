import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css'

const Cart = ({ cart, removeHandler }) => {

    const { image, name } = cart
    return (
        <div className='side-bar'>
            {<div className="side-bar-info">
                <img src={image} alt="" />
                <h2>{name}</h2>
                <button onClick={() => removeHandler(cart)}><FontAwesomeIcon icon={faTrash} /></button>

            </div>}
        </div>
    );
};

export default Cart;