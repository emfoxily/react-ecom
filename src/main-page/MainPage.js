// dependencies
import React, { Component } from 'react';
import Media from 'react-media';

import '../main-page/MainPage.css';

// components
import Header from '../main-page/header/Header.js';
import UploadRecipe from '../main-page/upload-recipe/UploadRecipe.js';
import MostBought from '../main-page/most-bought/MostBought.js';
import Footer from '../main-page/footer/Footer.js';

class MainPage extends Component {
    render() {
        return(
                <Media query="(max-width: 480px)">
                    {matches => 
                        matches ? (
                            <div>
                                <Header />
                            </div>
                        ) : (
                            <div className="main-wrapper">
                                {/* larger than 480px */}
                                <Header />
                                <UploadRecipe />
                                <MostBought />
                                <Footer />
                            </div>
                        )
                    }
                </Media>
        )
    }
}

export default MainPage;