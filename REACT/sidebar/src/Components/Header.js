import React from 'react';
import logo from '../Components/Assets/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="img-container">
                <img src={logo} alt=" logo" />
            </div>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/category">Category</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/faq">FAQs</a></li>
            </ul>

        </div>
    )
}

export default Header;
