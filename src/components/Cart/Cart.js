import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    // console.log(cart);
    const { image, name } = cart
    return (
        <div className='side-bar'>
            {<div className="side-bar-info">
                <img src={image} alt="" />
                <h2>{name}</h2>
                {/* <button><FontAwesomeIcon icon={faTrash} /></button> */}
                < FontAwesomeIcon icon={faTrash} />

            </div>}
        </div>
    );
};

export default Cart;