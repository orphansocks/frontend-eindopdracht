import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import ErrorMessage from "../../components/errors/ErrorMessage.jsx";
import axios from "axios";
import '../groups/Groups.css';
import GroupPortrait from "../../components/portrait/GroupPortrait.jsx";

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

            <section  className="outer-content-container">

                <div className="inner-content-container">

                    <p> If your groups are not showing, please make sure you have groups</p>
                    <p> or <Link to="/login">login</Link> or <Link to="/register">register</Link> first</p>
                    <p>  <Link to="/register">create group</Link></p>


                    {/*<Button type="button"*/}
                    {/*        onClick={ fetchRelatives }*/}
                    {/*        variant="primary">Get all relatives</Button>*/}



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