import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    console.log(props);

    let total = [];
    for (const product of cart) {
        total = product.name + total;
    }
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <h4>Selected Items: {cart.length}</h4>
            <h3>Movie Added: {total}</h3>
            <div>
                <button className='button-blue'>Choose 1 For Me</button>
                <button className='button-red'>Choose Again</button>
            </div>
        </div>

    );
};

export default Cart;