// dependencies
import React, { Component } from 'react';
import Media from 'react-media';

// components
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
                            <Header />
                        )
                    }
                </Media>
            </div>
        )
    }
}

export default MainPage;