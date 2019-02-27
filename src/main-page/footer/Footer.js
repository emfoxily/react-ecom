import React, { Component } from 'react';

import '../footer/Footer.css';

class Footer extends Component {
    render() {
        return(
            <footer className="footer">
                <div className="links">
                <h5>
                    Getting Started
                </h5>
                <ul>
                    <li>
                        Community
                    </li>
                    <li>
                        Recipes
                    </li>
                    <li>
                        Blog
                    </li>
                    <li>
                        FAQ
                    </li>
                </ul>
                </div>
                <div className="links">
                <h5>
                    Our Company
                </h5>
                <ul>
                    <li>
                        About Us
                    </li>
                    <li>
                        Our Team
                    </li>
                    <li>
                        Our Values
                    </li>
                    <li>
                        Careers
                    </li>
                </ul>
                </div>
                <div className="links">
                <h5>
                    Resources
                </h5>
                <ul>
                    <li>
                        Help Center
                    </li>
                    <li>
                        Terms of Service
                    </li>
                    <li>
                        Affiliates
                    </li>
                    <li>
                        Contact Us
                    </li>
                </ul>
                </div>
            </footer>
        )
    }
}

export default Footer;