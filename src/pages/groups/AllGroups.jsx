import React, {useEffect, useState} from "react";
import ErrorMessage from "../../components/errors/ErrorMessage.jsx";
import axios from "axios";
import '../groups/Groups.css';
import GroupPortrait from "../../components/portrait/GroupPortrait.jsx";
import LinkBar from "../../components/linkbar/LinkBar.jsx";

function AllGroups() {

    // state voor de functionaliteit
    const [groups, setRGroups] = useState([]);
    const [error, toggleError] = useState(false);

    // de functie voor het ophalen van de data
    async function fetchGroups() {
        toggleError(false);

        try {
            const response = await axios.get('http://localhost:8080/groups');
            console.log(response.data);


            setRGroups(response.data);
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }

    // useEffect om de relatives te laden on pageload
    useEffect(() => {
        fetchGroups();
    }, []);


    return (
        <>

            <h1 className="page-title">All groups</h1>
            <LinkBar
                linkTo="/newgroup"
                linkText="create group"
            />

            <section  className="outer-content-container">

                <div className="inner-content-container">

                    {groups.length > 0 && (

                        <ul className="group-items-list">
                            {groups.map((group) => {

                                return <GroupPortrait
                                    key={group.id}
                                    id={group.id}
                                    groupName={group.groupName}
                                    groupPlace={group.groupPlace}
                                    groupRelatives={group.relatives}


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

export default AllGroups;