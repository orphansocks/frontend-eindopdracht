import axios from "axios";
import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import Portrait from "../../components/portrait/Portrait.jsx";
import ErrorMessage from "../../components/errors/ErrorMessage.jsx";
import './Category.css';

function Category() {

    // state voor de functionaliteit
    const [relatives, setRelatives] = useState([]);
    const [error, toggleError] = useState(false);

    // de parameter voor het ophalen van de juiste category
    const { relation} = useParams();

    // de async functie voor het ophalen van de data
    async function fetchRelativesByRelation() {
        toggleError(false);

        try {
            const response = await axios.get(`http://localhost:8080/relatives/relation/${relation}`);
            console.log(response.data);
            setRelatives(response.data);

        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }

    // useEffect om de category by relation te laden on pageload
    useEffect(() => {
        fetchRelativesByRelation();
    }, [relation] );

return (

    <>
        <h1 className="page-title">{relation}</h1>

        <section className="outer-content-container">
            <div className="inner-content-container">


                {relatives.length > 0 && (
                    <ul className="relation-items-list">
                        {relatives.map((relative) => (
                            <Portrait
                                key={relative.id}
                                id={relative.id}
                                firstName={relative.firstName}
                                socialStatus={relative.socialStatus}
                                amountOfKids={relative.amountOfKids}
                                relation={relative.relation}
                            />
                        ))}
                    </ul>
                )}

                {error && <ErrorMessage message="Something went wrong. Please try again." />}
            </div>
        </section>










    </>

)


}

export default Category;