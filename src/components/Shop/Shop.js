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
                <p>To work in react there are two packages one is React and another is React Dom.When a component is written , it is a pure javascript code.This javascript code is need to be convert in HTML code.So to convert javascript code into react code we need React package.React automatically convert a component(javascript code) into HTML code.This HTML code is showed to browser using React Dom.This is how react works.</p>
                <p>Difference between props and state?</p>
                <p>Props are read only, props value can not be changed.In props you can pass properties from parent component.Props are sent by unidirectional way means from up to down.Props can not be modified.On the other hand state can be changed.State changes can be asynchronous.State can be defined in the component itself.State can be modified using this.setState.</p>
            </div>

        </div>
    );
};

export default Shop;