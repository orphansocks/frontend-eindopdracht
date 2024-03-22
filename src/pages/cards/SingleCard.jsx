import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import CardItem from "../../components/card/CardItem.jsx";
import ErrorMessage from "../../components/errors/ErrorMessage.jsx";
import Button from "../../components/button/Button.jsx";
import "./Cards.css";

function SingleCard() {
    const [card, setCard] = useState({});
    const [error, toggleError] = useState(false);
    const { id } = useParams();

    async function fetchCardById() {
        toggleError(false);
        try {
            const response = await axios.get(`http://localhost:8080/cards/${id}`);
            setCard(response.data);
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }

    useEffect(() => {
        fetchCardById();
    }, []);

    const shareImageOnWhatsApp = () => {
        const message = `Sending you a card: ${card.cardName} - designed by ${card.designedBy}. View image here: ${card.imageUrl}`;
        const whatsappUrl = `whatsapp://send?text=${encodeURIComponent(message)}`;
        window.location.href = whatsappUrl;
    };

    return (
        <>
            <h1 className="page-title">{card.cardName}</h1>
            <section className="outer-content-container">
                <div className="inner-content-container single-card-container">
                    <div className="single-card-container__card">
                        {Object.keys(card).length > 0 && (
                            <CardItem
                                key={card.id}
                                id={card.id}
                                cardName={card.cardName}
                                designer={card.designedBy}
                                category={card.category}
                            />
                        )}
                        {error && <ErrorMessage message="Something went wrong. Please try again." />}
                    </div>
                    <div className="single-card-container__text">
                        <Link to="/allcards" className="back-link">
                            <p>back to all cards</p>
                        </Link>
                        <h3>card {card.cardName}</h3>
                        <h5>designed by: {card.designedBy}</h5>
                        <h5>category: {card.category}</h5>
                        <Button
                            type="button"
                            variant="primary"
                            onClick={shareImageOnWhatsApp}
                        >
                            Send using WhatsApp
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SingleCard;
