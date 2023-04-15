import React, { useEffect, useState } from 'react';
import './Shop.css'
import Watch from '../Watch/Watch';
const Shop = () => {
    const [watches, setWatches] = useState([]);
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setWatches(data))
    },[])
    return (
        <div className='shop-container'>
            <div className="watches-container">
                 {
                    watches.map(watch => <Watch
                         key={watch.id}
                         watch = {watch}
                         ></Watch>)
                 }
            </div>
            <div className="cart-container">
                   <h4>Selected Watches</h4>
            </div>
        </div>
    );
};

export default Shop;