import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    const removeCartItems = () => {
        setCart([]);
        console.log('clicked');
    }
    const chooseRandom = () => {
        const result = Math.floor(Math.random() * cart.length);
        setCart([cart[result]]);
        // console.log([cart[result]]);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}

                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}
                    removeCartItems={removeCartItems}
                    chooseRandom={chooseRandom}></Cart>
            </div>
            <div className='details'>
                <p>How React Works?</p>
            </div>

        </div>
    );
};

export default Shop;