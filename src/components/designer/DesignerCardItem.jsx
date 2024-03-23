import degular from '../../assets/card_degular.png';
import kepler from '../../assets/card_kepler.png';
import roboto from '../../assets/card_roboto.png';
import ivy from '../../assets/card_yvi.png';
import haas from '../../assets/card_haas.png';

import '../card/CardItem.css';
import './AccountItem.css';
import React from "react";


function CardItem({ id, cardName, category, amountOfDownloads }) {

    let image = ivy; // Default image

    switch (cardName) {
        case "ivy":
            image = ivy;
            break;
        case "degular":
            image = degular;
            break;
        case "haas":
            image = haas;
            break;
        case "kepler":
            image = kepler;
            break;
        case "roboto":
            image = roboto;
            break;
        default:
            break;
    }


    return (

        <article className="card-item-container">

            <img src={image} alt={`${cardName}`} className="card-image"/>
            <div className="account-details">
            <h5>cardName: <span className="account-info">{cardName}</span> </h5>
            <h5>Category: <span className="account-info">{category}</span></h5>
            <h5>Amount of downloads: <span className="account-info"> {amountOfDownloads}</span></h5>
            </div>

        </article>

    )




}

export default CardItem;