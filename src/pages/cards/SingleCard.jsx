import axios from "axios";
import React, {useEffect, useState} from "react";
import CardItem from "../../components/card/CardItem.jsx";
import ErrorMessage from "../../components/errors/ErrorMessage.jsx";
import {Link, useNavigate, useParams} from "react-router-dom";
import './Cards.css';
import { PaperPlaneTilt } from "@phosphor-icons/react";

function SingleCard() {

    // state voor de functionaliteit
    const [card, setCard] = useState([]);
    const [error, toggleError] = useState(false);
    const navigate = useNavigate();

    // de parameter voor het ophalen van de juiste card
    const {id} = useParams();

    // de functie voor het ophalen van de data
    async function fetchCardById() {
        toggleError(false);

        try {
            const response = await axios.get(`http://localhost:8080/cards/${id}`);
            console.log(response.data);
            setCard(response.data);

        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }

    // useEffect om de cardById te laden on pageload
    useEffect(() => {
        fetchCardById();
    }, []);

return (

    <>
    <h1 className="page-title">{card.cardName}</h1>

        <section className="outer-content-container">

            <div className="inner-content-container single-card-container">
                <div className="single-card-container__card">

                    {Object.keys(card).length > 0 && (
                        <>

                            <CardItem
                                key={card.id}
                                id={card.id}
                                cardName={card.cardName}
                                designer={card.designer}
                                category={card.category}
                            />
                        </>
                    )}

                    {error && <ErrorMessage message="Something went wrong. Please try again." />}



                </div>

                <div className="single-card-container__text">
                    <Link to="/allcards" className="back-link">
                        <p>back to all cards</p>
                    </Link>
                    <h3>card {card.cardName}</h3>
                    <p>designed by {card.designer}</p>
                    <p>card category {card.category}</p>

                    <button onClick="openWhatsApp()"> <PaperPlaneTilt size={32} weight="light" />Open WhatsApp </button>

                    <p><PaperPlaneTilt size={32} weight="light" /> send to</p>

                </div>


            </div>


        </section>





    </>
)



}

export default SingleCard