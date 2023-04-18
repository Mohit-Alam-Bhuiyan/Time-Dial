import React, { useEffect, useState } from 'react';
import './Shop.css'
import Watch from '../Watch/Watch';
const Shop = () => {
    const [watches, setWatches] = useState([]);
    const [cart, setCart] = useState([]);
    const [randomNumber, setRandomNumber] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setWatches(data))
    },[])

    const handleAddToCart = (watch) => {
        console.log(watch);
        const newCart = [cart, watch.name];
        setCart(newCart);
    }

    function handleClearArray() {
        setCart([]);
      } 
     
       const generateRandomNumber = () => {
    const newRandomNumber = Math.floor(Math.random({cart}));
    setRandomNumber(newRandomNumber);
  }
      
    return (
        <div className='shop-container'>
            <div className="watches-container">
                 {
                    watches.map(watch => <Watch
                         key={watch.id}
                         watch = {watch}
                         handleAddToCart = {handleAddToCart}
                         ></Watch>)
                 }
            </div>
            <div className="cart-container">
                   <h4>Selected Watches</h4>
                   <p className='cart-add'>{cart}</p>
                   
                   <button  onClick={generateRandomNumber}>Choose 1 from here</button><br/>
                   <button onClick={handleClearArray}>Choose again</button>
            </div>
        </div>
    );
};
export default Shop;