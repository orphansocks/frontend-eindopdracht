import React, {useEffect, useState} from "react";
import './Cards.css';
import axios from "axios";
import {Link} from "react-router-dom";
import ErrorMessage from "../../components/errors/ErrorMessage.jsx";
import CardItem from "../../components/card/CardItem.jsx";

function AllCards() {

    const [cards, setCards] = useState([]);
    const [error, toggleError] = useState(false);

    async function fetchCards() {
        toggleError(false);

        try {
            const response = await axios.get('http://localhost:8080/cards');

            console.log(response.data);
            setCards(response.data);

        } catch (e) {

            console.error(e);
            toggleError(true);
        }

    }

    // useEffect om de cards te laden on pageload
    useEffect(() => {
        fetchCards();
    }, []);



    return (
        <>

            <h1 className="page-title">Cards</h1>

            <section  className="outer-content-container">
                <div className="inner-content-container">

                    {cards.length > 0 && (

                        <ul className="card-items-list">
                            {cards.map((card) => {

                                return <CardItem
                                    key={card.id}
                                    id={card.id}
                                    cardName={card.cardName}
                                    designer={card.designer}
                                    category={card.category}
                                />

                            })}
                        </ul>

                    )}
                    {error && <ErrorMessage message="Something went wrong. Please try again."/>}

                </div>

        </section>



        </>
    )
}

export default AllCards;