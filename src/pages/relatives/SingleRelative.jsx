import {Link, useNavigate, useParams} from "react-router-dom";
import Button from "../../components/button/Button.jsx";
import Portrait from "../../components/portrait/Portrait.jsx";
import React, {useEffect, useState} from "react";
import axios from "axios";
import ErrorMessage from "../../components/errors/ErrorMessage.jsx";
import calculateAge from "../../helpers/calculateAge.js";
import formatBirthday from "../../helpers/formatBirthday.js";

function SingleRelative() {

    // state voor de functionaliteit
    const [relative, setRelative] = useState([]);
    const [error, toggleError] = useState(false);
    const navigate = useNavigate();

    // de parameter voor het ophalen van de juiste relative
    const {id} = useParams();

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


    // useEffect om de relativeById te laden on pageload
    useEffect(() => {
        fetchRelativeById();
    }, []);

    return (

        <>

            <h1 className="page-title">{relative.firstName} ({calculateAge(relative.dob)})</h1>

            <section className="outer-content-container">

                <div className="inner-content-container inner-content-container__text-restriction">

                    {Object.keys(relative).length > 0 && (
                        <>
                            <h3>
                                NAME {relative.firstName} {relative.lastName} NICKNAME {relative.nickName} BIRTHDAY {formatBirthday(relative.dob)} TOGETHER WITH {relative.nameOfPartner}, {relative.amountOfKids} KIDS: {relative.namesOfKids} MISC " {relative.misc} " OUR RELATION {relative.relation}
                            </h3>
                            <Portrait
                                key={relative.id}
                                id={relative.id}
                                firstName={relative.firstName}
                                socialStatus={relative.socialStatus}
                                amountOfKids={relative.amountOfKids}
                                relation={relative.relation}
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
                            onClick={() => navigate('/searchrelative')}>Change</Button>
                    <Button type="button" variant="primary"
                            onClick={() => navigate('/searchrelative')}>Delete</Button>
                         <Button type="button" variant="primary"
                                 onClick={() => navigate('/allcards')}>Send a card</Button>
                </span>
                </div>
            </section>

            <section className="outer-content-container">
            <div className="inner-content-container">
                     <span>
                    <Link to="/allrelatives" className="back-link">
                        <p>Back to all relatives</p>
                    </Link>
                        </span>
            </div>
            </section>


        </>


    )


}

export default SingleRelative;