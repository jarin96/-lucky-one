import React, { useState } from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart, removeCartItems, chooseRandom } = props;
    console.log(props);
    let items = cart;

    let total = [];
    for (const product of items) {
        total = product.name + total;
    }

    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <h4>Selected Items: {items.length}</h4>
            <h3>Movie Added: {total}</h3>
            <div>
                <button onClick={chooseRandom} className='button-blue'>Choose 1 For Me</button>
                <button onClick={removeCartItems} className='button-red'>Choose Again</button>
            </div>
        </div>

    );
};

export default Cart;