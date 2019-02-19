// dependencies
import React, { Component } from 'react';
import Media from 'react-media';

// components
import Header from '../main-page/header/Header.js';
import UploadRecipe from '../main-page/upload-recipe/UploadRecipe.js';
import MostBought from '../main-page/most-bought/MostBought.js';

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
                            <div>
                                {/* larger than 480px */}
                                <Header />
                                <UploadRecipe />
                                <MostBought />
                            </div>
                        )
                    }
                </Media>
        )
    }
}

export default MainPage;