import React from 'react';
import logo from '../../images/amazon-dark-logo.png';
import { faPhotoFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <h1>Movie Mack <FontAwesomeIcon className='icon' icon={faPhotoFilm}></FontAwesomeIcon></h1>
            </div>
        </nav>
    );
};

export default Header;