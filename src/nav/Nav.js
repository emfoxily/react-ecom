import React, { Component } from 'react';
import '../nav/Nav.css';
import search from '../assets/magnifier.png';

class Nav extends Component {
    render() {
        return(
                <nav className="navbar">
                    <h1 className="site-title">
                        YOUR CUP OF <span className="sugar">
                            sugar
                        </span>
                    </h1>
                    <ul className="links">
                        <li>home</li>
                        <li>shop</li>
                        <li>recipes</li>
                        <li>community</li>
                        <li>careers</li>
                        <li>contact us</li>
                    </ul>
                    <div className="search">
                        <input type="text" placeholder="Search..." />
                        <a href="/">
                            <img className="search-image" src={search} alt="search"/>
                        </a>
                    </div>
                </nav>
        )
    }
}

export default Nav;