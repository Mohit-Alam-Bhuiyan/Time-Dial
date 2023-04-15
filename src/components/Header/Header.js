import React from 'react';
import logo from '../../images/logo1.png'
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt=""/>
            <div>
              <a href="/brandS">BRANDS A-Z</a>
              <a href="/mens">MENS</a>
              <a href="/ladies">LADIES</a>
              <a href="/stores">STORES</a>
            </div>
        </nav>
    );
};

export default Header;