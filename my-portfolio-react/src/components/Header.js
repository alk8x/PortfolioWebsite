import React from 'react';
import './Header.css';  // Create and import CSS file for Header styles

const Header = () => {
    return (
        <header>
            <nav>
                <a href="index.html" className="logo">Allison Karp</a>
                <div className="nav-links">
                    <a href="index.html" className="active">Work</a>
                    <a href="play.html">Play</a>
                    <a href="about.html">About</a>
                </div>
            </nav>
        </header>
    );
};

export default Header;
