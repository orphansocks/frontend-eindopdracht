import degular from '../../assets/hbd_degular.png';
import kepler from '../../assets/hbd_kepler.png';
import roboto from '../../assets/hbd_roboto.png';
import ivy from '../../assets/hbd_yvi.png';
import haas from '../../assets/hbd_haas.png';

import './CardItem.css';
import {Link} from "react-router-dom";
import React from "react";


function CardItem({id, cardName, designer, category}) {

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


                    <Link to={`/cards/${id}`}>
                        <img src={image} alt={`${cardName}`} className="card-image"/>
                    </Link>

                </article>

            )




}

export default CardItem;