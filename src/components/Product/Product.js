import React from 'react';
import './Product.css';
import { faShoppingCart, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
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
                <p><small>Ratings: {ratings}  <FontAwesomeIcon className='icon' icon={faStar}></FontAwesomeIcon> <FontAwesomeIcon className='icon' icon={faStar}></FontAwesomeIcon> <FontAwesomeIcon className='icon' icon={faStar}></FontAwesomeIcon> <FontAwesomeIcon className='icon' icon={faStar}></FontAwesomeIcon> <FontAwesomeIcon className='icon' icon={faStarHalfAlt}></FontAwesomeIcon></small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;