import React, { Component } from 'react';
import '../header/Header.css';
import search from '../assets/magnifier.png';

class Header extends Component {
    render() {
        return(
            <header className="site-header">
                <h1 className="site-title">
                    YOUR CUP OF <span className="sugar">
                        sugar
                    </span>
                </h1>
                <div className="search">
                    <input type="text" placeholder="Search..." />
                    <a href="/">
                        <img className="search-image" src={search} alt="search"/>
                    </a>
                </div>
            </header>
        )
    }
}

export default Header;