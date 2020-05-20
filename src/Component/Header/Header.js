import React from 'react';
import logo from '../Header/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <a href="/home">Home</a>
                <a href="/score">Score</a>
                <a href="/match">Match</a>
                <a href="/details">Details</a>
            </nav>
        </div>
    );
};

export default Header;