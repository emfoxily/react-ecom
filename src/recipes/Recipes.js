import React, { Component } from 'react';

import axios from 'axios';

import '../recipes/Recipes.css';

class Recipes extends Component {
    state = {
        recipes: []
    }

    componentDidMount() {
        axios.get(`https://api.edamam.com/search?q=any&app_id=4445aa19&app_key=0c6ef559cb52d848f2ab1076c8702fd8`)
            .then(res => {
                const recipes = res.data.hits;
                this.setState({ recipes });
                console.log(recipes);
            })
    }

    render() {
        return(
            <div>
                <ul className="recipe-list">
                    { this.state.recipes.map(recipe => <li><img src={recipe.recipe.image} alt={recipe.recipe.label} />  <br /><h1>{recipe.recipe.label}</h1></li>)}
                </ul>
            </div>
        )
    }
}

export default Recipes;