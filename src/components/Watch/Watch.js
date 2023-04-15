import React from 'react';
import './Watch.css'
const Watch = (props) => {
    const {img, name, price} = props.watch;
    return (
        <div className='watch'>
            <img src= {img} alt="" />

            <div className='watch-info'>
            <p className='watch-name'>{name}</p>
            <p className='watch-price'>{price}</p>
            </div>

            <button className='btn-cart'>
                <p>Add To Cart</p>
            </button>
        </div>
    );
};

export default Watch;