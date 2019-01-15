// dependencies
import React, { Component } from 'react';
import Media from 'react-media';

// components
import Nav from '../nav/Nav.js';
import Header from '../header/Header.js';

class MainPage extends Component {
    render() {
        return(
            <div>
                <Media query="(max-width: 480px)">
                    {matches => 
                        matches ? (
                            <h1>the screen is 480px wide or less</h1>
                        ) : (
                            <div>
                                <Nav />
                                <Header />
                            </div>
                        )
                    }
                </Media>
            </div>
        )
    }
}

export default MainPage;