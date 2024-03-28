import {useNavigate, useParams} from "react-router-dom";
import Portrait from "../../components/portrait/Portrait.jsx";
import React, {useEffect, useState} from "react";
import axios from "axios";
import ErrorMessage from "../../components/errors/ErrorMessage.jsx";
import './Groups.css';
import LinkBar from "../../components/linkbar/LinkBar.jsx";
import Button from "../../components/button/Button.jsx";
import ChangeGroupForm from "../../components/forms/changeGroupForm.jsx";

function SingleGroup() {

    // state voor de functionaliteit
    const [group, setGroup] = useState({});
    const [error, toggleError] = useState(false);
    const [showChangeGroup, setShowChangeGroup] = useState(false);

    const navigate = useNavigate();

    // de parameter voor het ophalen van de juiste group
    const {id} = useParams();

    // de async functie voor het ophalen van de data
    async function fetchGroupById() {
        toggleError(false);

        try {
            const response = await axios.get(`http://localhost:8080/groups/${id}`);
            console.log('group', response.data);
            setGroup(response.data);

        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }

    // de functie om de group te verwijderen
    async function deleteGroupById(id) {
        toggleError(false);

        const confirmDelete = window.confirm('Are you sure you want to delete this group?');

        if (!confirmDelete) {
            return;
        }

        try {
            await axios.delete(`http://localhost:8080/groups/${id}`);
            navigate('/allgroups');
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }

    // handle the changeGroup button click
    const changeGroup = () => {
        setShowChangeGroup(true);
    };

    const updateGroupData = async () => {
        await fetchGroupById(); // haal de gewijzigde data op
        setShowChangeGroup(false); // haal het formulier weer weg na wijzigen
    };


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


                    {Array.isArray(group.relatives) && group.relatives.length > 0 && (
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
                            onClick={ changeGroup }>
                        Change group
                    </Button>

                    <Button type="button"
                            variant="primary"
                            onClick={() => deleteGroupById(id)}>
                            Delete group
                    </Button>
                </span>
                </div>
            </section>

            {showChangeGroup && (

                <section className="outer-content-container">
                    <div className="inner-content-container">
                        <h2>change group</h2>

                        <ChangeGroupForm
                            group={ group }
                            updateGroupData={ updateGroupData }
                            groupRelatives={ group.relatives }
                        />


                    </div>

                </section>
            )}

        </>

    )


}

export default SingleGroup;