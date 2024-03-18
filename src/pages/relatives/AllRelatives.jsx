import {Link} from "react-router-dom";
import Portrait from "../../components/portrait/Portrait.jsx";
import React, {useEffect, useState} from "react";
import ErrorMessage from "../../components/errors/ErrorMessage.jsx";
import axios from "axios";
import './Relatives.css';
import LinkBar from "../../components/linkbar/LinkBar.jsx";

function AllRelatives() {

    // state voor de functionaliteit
    const [relatives, setRelatives] = useState([]);
    const [error, toggleError] = useState(false);

    // de functie voor het ophalen van de data
    async function fetchRelatives() {
        toggleError(false);

        try {
            const response = await axios.get('http://localhost:8080/relatives');
            const sortedRelatives = response.data.sort((a, b) => {
                if (a.firstName.toLowerCase() < b.firstName.toLowerCase()) return -1;
                if (a.firstName.toLowerCase() > b.firstName.toLowerCase()) return 1;
                return 0;
            });
            console.log(sortedRelatives);
            setRelatives(sortedRelatives);

        } catch (e) {

            console.error(e);
            toggleError(true);
        }
    }

    // useEffect om de relatives te laden on pageload
    useEffect(() => {
        fetchRelatives();
    }, []);


    return (
        <>

            <h1 className="page-title">All relatives</h1>
            <LinkBar
                linkTo="/allgroups"
                linkText="go to your groups"
            />

            <section  className="outer-content-container">

                <div className="inner-content-container">


                    {relatives.length > 0 && (

                        <ul className="portrait-items-list">
                            {relatives.map((relative) => {

                                return <Portrait
                                    key={relative.id}
                                    id={relative.id}
                                    firstName={relative.firstName}
                                    socialStatus={relative.socialStatus}
                                    amountOfKids={relative.amountOfKids}
                                    relation={relative.relation}
                                    dob={relative.dob}
                                    />

                                    })}
                        </ul>
                    )}
                    {error && <ErrorMessage message="Something went wrong. Please try again." />}



                </div>


            </section>


        </>


    )





}

export default AllRelatives;