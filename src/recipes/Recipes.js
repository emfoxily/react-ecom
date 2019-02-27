import React, { Component } from 'react';

import axios from 'axios';

import '../recipes/Recipes.css';

class Recipes extends Component {
    state = {
        recipes: []
    }

    componentDidMount() {
        axios.get(`http://www.recipepuppy.com/api/`)
            .then(res => {
                const recipes = res.data.results;
                this.setState({ recipes });
                console.log(recipes);
            })
    }

    render() {
        return(
            <div>
                <ul className="recipe-list">
                    { this.state.recipes.map(recipe => <li>{recipe.title}</li>)}
                </ul>
            </div>
        )
    }
}

export default Recipes;