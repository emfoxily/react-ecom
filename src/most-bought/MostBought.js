import React, { Component } from 'react';
import '../most-bought/MostBought.css';
import mixer from '../assets/mixer.png';
import tools from '../assets/tools.png';

class MostBought extends Component {
    render() {
        return(
            <div className="pop-items">
                <h2>
                    Popular Items
                </h2>
                <hr />
                <div className="most-bought">
                    <img className="product" src={mixer} alt="mixer"/>

                    <img className="product" src={tools} alt="tools"/>
                </div>
            </div>
        )
    }
}

export default MostBought;