import React, { Component } from 'react';
import '../header/Header.css';
import supplies from '../assets/header-image.jpg';

class Header extends Component {
    render() {
        return(
            <header>
                 <span className="slogan">
                    "Your next recipe is just one sift away..."
                </span>
                <img className="header-image" src={supplies} alt="baking supplies" />
            </header>
        )
    }
}

export default Header;