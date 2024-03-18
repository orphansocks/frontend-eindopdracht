import {Link, useParams} from "react-router-dom";
import Portrait from "../../components/portrait/Portrait.jsx";
import React, {useEffect, useState} from "react";
import axios from "axios";
import ErrorMessage from "../../components/errors/ErrorMessage.jsx";
import './Groups.css';
import LinkBar from "../../components/linkbar/LinkBar.jsx";
import Button from "../../components/button/Button.jsx";

function SingleGroup() {

    // state voor de functionaliteit
    const [group, setGroup] = useState({});
    const [error, toggleError] = useState(false);

    // de parameter voor het ophalen van de juiste group
    const {id} = useParams();

    // de async functie voor het ophalen van de data
    async function fetchGroupById() {
        toggleError(false);

        try {
            const response = await axios.get(`http://localhost:8080/groups/${id}`);
            console.log(response.data);
            setGroup(response.data);

        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }


    // useEffect om de group by Id te laden on pageload
    useEffect(() => {
        fetchGroupById();
    }, []);

    return (

        <>
            <h1 className="page-title">{group.groupName}</h1>
            <LinkBar
                linkTo="/allgroups"
                linkText="back to all groups"
            />

            <section className="outer-content-container">
                <div className="inner-content-container">


                    {group.relatives && group.relatives.length > 0 && (
                        <ul className="group-items-list">
                            {group.relatives.map((relative) => (
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

            <section className="outer-content-container">
                <div className="inner-content-container">
                    <span>
                    <Button type="button"
                            variant="primary"
                            onClick={() => navigate('/searchrelative')}>
                        Change group
                    </Button>
                    <Button type="button"
                            variant="primary"
                            onClick={() => navigate('/searchrelative')}>
                            Delete group
                    </Button>
                </span>
                </div>
            </section>



        </>


    )


}

export default SingleGroup;