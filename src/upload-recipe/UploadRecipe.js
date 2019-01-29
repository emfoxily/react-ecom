import React, { Component } from 'react';
import sugar from '../assets/sugar.png';
import sugar2 from  '../assets/sugar2.png';
import '../upload-recipe/UploadRecipe.css';

class UploadRecipe extends Component {
    render() {
        return(
            <div className="upload-recipe">
                <h2>
                    Have a recipe you want to share?
                </h2>
                <p>
                    <a href="/">
                        Join our community
                    </a> to share and grow your cookbook! Thousands of users upload every day, so it's never too late to get this bread.
                </p>
                <img className="sugar" src={sugar} alt="bag of sugar" />
                <img className="sugar2" src={sugar2} alt="pile of sugar" />
            </div>
        )
    }
}

export default UploadRecipe;