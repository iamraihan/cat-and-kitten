import { faHourglass1, faShuffle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Cat from '../Cat/Cat';
import Random from '../Random/Random';
import './Shop.css'

const Shop = () => {
    const [cats, setCats] = useState([])
    const [cart, setCart] = useState([])
    const [random, setRandom] = useState([])
    // console.log(cart);
    useEffect(() => {
        fetch('cats.json')
            .then(res => res.json())
            .then(data => setCats(data))
    }, [])
    const cartHandler = (cat) => {
        const newCart = [...cart, cat]
        setCart(newCart)
        // console.log(cat);

    }

    function getRandom() {
        const item = cart[Math.floor((Math.random() * cart.length))];
        setRandom([item])
        console.log(random);
    }
    return (
        <div className='shop'>
            <div className="cats-container">

                {
                    cats.map(cat => <Cat key={cat.id} cat={cat} cartHandler={cartHandler}></Cat>)
                }
            </div>
            <div className="cart-container">
                {/* {cart.map(cart => (
                    <h1>{cart.name} </h1>
                ))} */}

                {/* {
                    cart.map(cart => (

                        <div className='side-bar'>


                            <img src={cart.image} alt="" />
                            <h2>{cart.name} </h2>
                            < FontAwesomeIcon icon={faTrash} />

                        </div>

                    ))
                } */}

                {
                    random.map(item => <Random key={item.id} randomCat={item}></Random>)
                }
                {
                    cart.map(item => <Cart key={item.id} cart={item}></Cart>)
                }


                <button onClick={getRandom} className='shuffle-btn'>Choose One For Me <FontAwesomeIcon icon={faShuffle} /></button>
                <button className='shuffle-btn'>Choose Again </button>
            </div>
        </div>
    );
};

export default Shop;