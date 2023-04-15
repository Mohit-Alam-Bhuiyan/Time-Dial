import React from 'react';
import './Watch.css'
const Watch = (props) => {
    const {img, name, price} = props.watch;
    return (
        <div className='watch'>
            <img src= {img} alt="" />
        </div>
    );
};

export default Watch;