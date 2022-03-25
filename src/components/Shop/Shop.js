import React, { useEffect, useState } from 'react';
import Cat from '../Cat/Cat';
import './Shop.css'

const Shop = () => {
    const [cats, setCats] = useState([])
    useEffect(() => {
        fetch('cats.json')
            .then(res => res.json())
            .then(data => setCats(data))
    }, [])
    return (
        <div className='shop'>
            <div className="cats-container">
                {
                    cats.map(cat => <Cat key={cat.id} cat={cat}></Cat>)
                }
            </div>
            <div className="cart-container">Cart</div>
        </div>
    );
};

export default Shop;