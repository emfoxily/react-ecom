// dependencies
import React, { Component } from 'react';
import Media from 'react-media';

// components
import Nav from '../nav/Nav.js';
import Header from '../header/Header.js';
import UploadRecipe from '../upload-recipe/UploadRecipe.js';

class MainPage extends Component {
    render() {
        return(
                <Media query="(max-width: 480px)">
                    {matches => 
                        matches ? (
                            <div>
                                <Nav />
                                <Header />
                            </div>
                        ) : (
                            <div>
                                {/* larger than 480px */}
                                <Nav />
                                <Header />
                                <UploadRecipe />
                            </div>
                        )
                    }
                </Media>
        )
    }
}

export default MainPage;