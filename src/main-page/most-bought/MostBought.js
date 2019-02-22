import React, { Component } from 'react';
import '../most-bought/MostBought.css';
import mixer from '../../assets/mixer.png';
import tools from '../../assets/tools.png';
import sifter from '../../assets/sifter.jpg';

class MostBought extends Component {
    render() {
        return(
            <div className="pop-items">
                <h2>
                   Most Frequently Viewed and Bought Items
                </h2>
                <hr />
                <div className="most-bought">
                    <img className="product" src={mixer} alt="mixer"/>

                    <img className="product" src={tools} alt="tools"/>

                    <img className="product" src={sifter} alt="sifter" />
                </div>
            </div>
        )
    }
}

export default MostBought;