import {Link, useParams} from "react-router-dom";
import Button from "../../components/button/Button.jsx";
import Portrait from "../../components/portrait/Portrait.jsx";
import React, {useState} from "react";
import axios from "axios";
import ErrorMessage from "../../components/errors/ErrorMessage.jsx";
import calculateAge from "../../helpers/calculateAge.js";
import formatBirthday from "../../helpers/formatBirthday.js";

function SingleRelative() {

    // state voor de functionaliteit
    const [relative, setRelative] = useState([]);
    const [error, toggleError] = useState(false);

    // de parameter voor het ophalen van de juiste relative
    const {id} = useParams()

    // de functie voor het ophalen van de data
    async function fetchRelativeById() {
        toggleError(false);

        try {
            const response = await axios.get(`http://localhost:8080/relatives/${id}`);
            console.log(response.data);
            setRelative(response.data);

        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }

    return (

        <>

            <h1 className="page-title">{relative.firstName} ({calculateAge(relative.dob)})</h1>

            <section className="outer-content-container">

                <div className="inner-content-container">

                    <Button
                        type="button"
                        onClick={ fetchRelativeById }
                        variant="primary">get {relative.firstName}</Button>

                    {Object.keys(relative).length > 0 && (
                        <>
                            <h3>
                                NAME {relative.firstName} NICKNAME {relative.nickName} BIRTHDAY {formatBirthday(relative.dob)} TOGETHER WITH {relative.nameOfPartner}, {relative.amountOfKids} KIDS: {relative.namesOfKids} MISC " {relative.misc} " OUR RELATION {relative.relation}
                            </h3>
                            <Portrait
                                key={relative.id}
                                id={relative.id}
                                // firstName={relative.firstName}
                            />
                        </>
                    )}

                    {error && <ErrorMessage message="Something went wrong. Please try again." />}





                </div>

            </section>

            <section className="outer-content-container">
                <div className="inner-content-container">
                    <span>
                    <Button type="button" variant="primary"
                            onClick={() => navigate('/searchrelative')}>Aanpassen</Button>
                    <Button type="button" variant="primary"
                            onClick={() => navigate('/searchrelative')}>Verwijderen</Button>
                </span>
                    <span>
                    <Link to="/allrelatives" className="back-link">
                        <p>Terug naar de overzichtspagina</p>
                    </Link>
                        </span>

                </div>

            </section>


        </>


    )


}

export default SingleRelative;