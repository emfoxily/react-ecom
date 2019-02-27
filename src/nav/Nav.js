import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import '../nav/Nav.css';
import search from '../assets/magnifier.png';

import MainPage from '../main-page/MainPage.js';
import Shop from '../shop/Shop.js';
import Recipes from '../recipes/Recipes.js';

class Nav extends Component {
    render() {
        return(
                <Router>
                    <div>
                        <nav className="navbar">
                            <h1 className="site-title">
                                YOUR CUP OF <span className="sugar">
                                    sugar
                                </span>
                            </h1>
                            <ul className="links">
                                <li>
                                    <Link to="/">home</Link>
                                </li>
                                <Link to="/shop">
                                    <li>shop</li>
                                </Link>
                                <li><Link to="/recipes">
                                    recipes
                                </Link></li>
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
                        <Route exact path="/" component={MainPage} />
                        <Route path="/shop" component={Shop} />
                        <Route path="/recipes" component={Recipes} />
                    </div>
                </Router>
        )
    }
}

export default Nav;