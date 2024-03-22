import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext.jsx";
import axios from "axios";

import ErrorMessage from "../../components/errors/ErrorMessage.jsx";
import {useParams} from "react-router-dom";
import AccountItem from "../../components/designer/AccountItem.jsx";

import './Designer.css';
import UploadCardForm from "../../components/forms/uploadCardForm.jsx";
import CardItem from "../../components/card/CardItem.jsx";

function Designer() {

    // state voor de functionaliteit
    const [designer, setDesigner] = useState({});
    const [error, toggleError] = useState(false);
    const { user } = useContext(AuthContext);

    // de parameter voor het ophalen van de juiste relative
    const {id} = useParams();

    //useeffect voor het juist ingelogd zijn
    // useEffect(() => {
    //     const source = axios.CancelToken.source();

        // async function voor het ophalen van de designerdata
        async function fetchDesignerById() {
            toggleError(false);

            try {
                const response = await axios.get(`http://localhost:8080/designers/${id}`);

                console.log(response.data);
                setDesigner(response.data);

            } catch (e) {
                console.error(e);
                toggleError(true);
            }
        }

    // useEffect om de designerdata te laden on pageload
    useEffect(() => {
        fetchDesignerById();
    }, []);


    return (
        <>
            <h1 className="page-title">Account</h1>

                <section className="outer-content-container">

                    <div className="account-container">

                        {Object.keys(designer).length > 0 && (
                            <>
                                <AccountItem
                        key={designer.id}
                        id={designer.id}
                        company={designer.company}
                        firstname={designer.firstname}
                        lastname={designer.lastname}
                        address={designer.address}
                        url={designer.url}
                        phone={designer.phone}
                        bank={designer.bankAccount}

                        />
                            </>
                        )}

                        {error && <ErrorMessage message="Something went wrong. No account details found." />}

                    </div>

                    <div className="account-container">
                        <h3>Your downloads</h3>



                    </div>

                </section>


            <section className="outer-content-container">
                <div className="inner-content-container">
                    <h2>Your cards</h2>

                    {designer.cardDto && designer.cardDto.length > 0 && (
                        <ul className="card-items-list">
                            {designer.cardDto.map((card) => (
                                <CardItem
                                    key={card.id}
                                    id={card.id}
                                    cardName={card.cardName}
                                    designer={card.designer}
                                    category={card.category}
                                />
                            ))}
                        </ul>
                    )}

                </div>
            </section>


            <section className="outer-content-container">
                <div className="inner-content-container">
                    <h2>Upload a new card</h2>
                    <UploadCardForm />
                </div>
            </section>



        </>
    );
}

export default Designer;
