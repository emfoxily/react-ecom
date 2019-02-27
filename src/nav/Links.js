import React, { Component } from 'react';
import { BrowserRouter as Link } from "react-router-dom";

import '../nav/Nav.css';

class Links extends Component {
    render() {
        return(
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
        )
    }
}

export default Links;