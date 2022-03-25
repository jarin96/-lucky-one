import React from 'react';
import './Product.css';
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Product = (props) => {
    const { product, handleAddToCart } = props;
    const { name, img, genres, edition, price, ratings } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h3 className='product-name'>{name}</h3>
                <p>Price: $ {price}</p>
                <p><small>Genres: {genres}</small></p>
                <p><small>Edition: {edition}</small></p>
                <p><small>Ratings: {ratings} stars</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;