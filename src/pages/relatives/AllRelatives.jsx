import {Link} from "react-router-dom";
import Portrait from "../../components/portrait/Portrait.jsx";
import React, {useEffect, useState} from "react";
import ErrorMessage from "../../components/errors/ErrorMessage.jsx";
import axios from "axios";
import './Relatives.css';

function AllRelatives() {

    // state voor de functionaliteit
    const [relatives, setRelatives] = useState([]);
    const [error, toggleError] = useState(false);

    // de functie voor het ophalen van de data
    async function fetchRelatives() {
        toggleError(false);

        try {
            const response = await axios.get('http://localhost:8080/relatives');
            console.log(response.data);


            setRelatives(response.data);
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

            <section  className="outer-content-container">

                <div className="inner-content-container">

                    <p> If your relatives are not showing, please <Link to="/login">login</Link> or <Link to="/register">register</Link> first</p>
                    <p> <Link to="/allgroups">Go yo your groups ></Link></p>


                    {/*<Button type="button"*/}
                    {/*        onClick={ fetchRelatives }*/}
                    {/*        variant="primary">Get all relatives</Button>*/}



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