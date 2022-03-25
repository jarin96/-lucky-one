import React from 'react';
import logo from '../../images/amazon-dark-logo.png';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <h1>Movie Mack</h1>
            </div>
        </nav>
    );
};

export default Header;