import React from 'react';
import './Watch.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Watch = ({watch, handleAddToCart}) => { 
   // const {watch, handleAddToCart} = props;
    const {img, name, price} = watch;
    return (
        <div className='watch'>
            <img src= {img} alt="" />

            <div className='watch-info'>
            <p className='watch-name'>{name}</p>
            <p className='watch-price'>{price}</p>
            </div>

            <button onClick={ () => handleAddToCart(watch)} className='btn-cart'>
                <p className='addCart'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Watch;