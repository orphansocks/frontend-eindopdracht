import {Link, useParams} from "react-router-dom";
import Button from "../../components/button/Button.jsx";
import Portrait from "../../components/portrait/Portrait.jsx";
import React, {useState} from "react";
import axios from "axios";
import ErrorMessage from "../../components/errors/ErrorMessage.jsx";

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

            <h1 className="page-title">{relative.firstName}(47)</h1>

            <section className="outer-content-container">

                <div className="inner-content-container">

                    <Button
                        type="button"
                        onClick={ fetchRelativeById }
                        variant="primary">get Relative</Button>

                    {Object.keys(relative).length > 0 && (

                        <h3>NAME {relative.firstName} {relative.lastName} NICKNAME {relative.nickName} BIRTHDAY {relative.dob} TOGETHER WITH partner , {relative.amountOfKids} KIDS: {relative.namesOfKids} MISC " {relative.misc} " OUR RELATION {relative.relation} </h3>

                    )}
                    {error && <ErrorMessage message="Something went wrong. Please try again." />}


                    {/*<h3>NAME Marie Machielsen NICKNAME Marietje GEBOREN 10 juni 1976 GETROUWD met*/}
                    {/*    Klaas Klaassen KIDS (3) Keesje Timmie & Sjakie RELATIVE Collega Utrecht MISC “geen sla geen*/}
                    {/*    vla”*/}
                    {/*</h3>*/}



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