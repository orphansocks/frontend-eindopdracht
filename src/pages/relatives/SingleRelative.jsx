import {useNavigate, useParams} from "react-router-dom";
import Button from "../../components/button/Button.jsx";
import Portrait from "../../components/portrait/Portrait.jsx";
import LinkBar from "../../components/linkbar/LinkBar.jsx";
import React, {useEffect, useState} from "react";
import axios from "axios";
import ErrorMessage from "../../components/errors/ErrorMessage.jsx";
import calculateAge from "../../helpers/calculateAge.js";
import formatBirthday from "../../helpers/formatBirthday.js";
import ChangeRelativeForm from "../../components/forms/ChangeRelativeForm.jsx";

function SingleRelative() {

    // state voor de functionaliteit
    const [relative, setRelative] = useState([]);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [showChangeRelative, setShowChangeRelative] = useState(false);

    const navigate = useNavigate();

    // de parameter voor het ophalen van de juiste relative
    const { id} = useParams();

    // de async functie voor het ophalen van de data
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

    // de functie om de relative te verwijderen
    async function deleteRelativeById(id) {
        toggleError(false);

        const confirmDelete = window.confirm('Are you sure you want to delete this relative?');

        if (!confirmDelete) {
            return;
        }

        try {
            await axios.delete(`http://localhost:8080/relatives/${id}`);
            navigate('/allrelatives');
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }

    // function to handle the changerelative button click
    const changeRelative = () => {
        setShowChangeRelative(true);
    };

    const updateRelativeData = async () => {
        await fetchRelativeById(); // Fetch updated data after submission
        setShowChangeRelative(false); // Hide the form after submission
    };


    // useEffect om de relativeById te laden on pageload
    useEffect(() => {
        fetchRelativeById();
    }, []);

    return (

        <>

            <h1 className="page-title">{relative.firstName}
                {relative.dob && (
                    <>
                ({calculateAge(relative.dob)})
                    </>
                )}
            </h1>

            <LinkBar
                linkTo="/allrelatives"
                linkText="back to all relatives"
            />

            <section className="outer-content-container">

                <div className="inner-content-container inner-content-container__text-restriction">

                    {Object.keys(relative).length > 0 && (
                        <>


                        <h3>
                            <span className="sub">(Name)</span> {relative.firstName} {relative.lastName}

                            {relative.nickName && (
                                <>
                            <span className="sub"> (Nickname) </span> {relative.nickName}
                                </>
                            )}

                            {relative.dob && (
                                <>
                            <span className="sub"> (Birthday) </span> {formatBirthday(relative.dob)}
                                </>
                            )}

                            {relative.nameOfPartner && (
                                <>
                            <span className="sub"> (Together with) </span> {relative.nameOfPartner}
                                </>
                            )}

                            {relative.amountOfKids > 0  && (
                                <>
                                <span className="sub"> (Amount of Kids) </span> {relative.amountOfKids}
                                </>
                            )}

                            {relative.amountOfKids > 0  && relative.namesOfKids && (
                                <>
                                <span className="sub"> (And their names) </span> {relative.namesOfKids}
                                </>
                            )}

                            {relative.misc && (
                                <>
                            <span className="sub"> (Misc) </span> "{relative.misc}"
                                </>
                            )}

                            {relative.relation && (
                                <>
                            <span className="sub"> (Our relation) </span> {relative.relation}
                                </>
                            )}
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
                    <Button type="button"
                            variant="primary"
                            onClick={changeRelative}>
                        Change relative
                    </Button>

                    <Button type="button"
                            variant="primary"
                            onClick={() => deleteRelativeById(id)}>
                            Delete relative
                    </Button>

                        <Button
                            type="button"
                            variant="primary"
                            onClick={() => navigate('/allcards')}>
                            Send a card
                        </Button>
                </span>
                </div>
            </section>

            {showChangeRelative && (

            <section className="outer-content-container">
                <div className="inner-content-container">
                    <h2>change relative</h2>

                    <ChangeRelativeForm
                        relative={ relative }
                        updateRelativeData={ updateRelativeData }
                    />


                </div>

            </section>
                )}

        </>


    )


}

export default SingleRelative;