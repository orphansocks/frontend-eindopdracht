import React, { useState } from 'react';
import './Forms.css';
import Portrait from "../portrait/Portrait.jsx";
import ErrorMessage from "../errors/ErrorMessage.jsx";
import axios from "axios";


function SearchForm() {

    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [error, toggleError] = useState(false);
    const [searched, setSearched] = useState(false)


   // de functie voor het ophalen van de zoekdata
    async function handleSearch(event) {
        console.log("searching for:", searchQuery);
        event.preventDefault();
        toggleError(false);

        try {
            const response = await axios.get(`http://localhost:8080/relatives/name/${searchQuery}`);
            console.log(response.data);

            setSearchResults(response.data);
            setSearchQuery('');
            setSearched(true);
        } catch (e) {
            console.error(e);
            toggleError(true);

        }
    }


    const handleSearchChange = (event) => {
        const value = event.target.value;
        setSearchQuery(value);
        setSearched(false);
    };

    return (
        <div className="inner-content-container">
            <form>
            <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search on name ..."
            />

            <button className="form-button"
                    type="submit"
                    onClick={handleSearch}>
                Search
            </button>
            {error && <ErrorMessage message="Something went wrong. Please try again." />}

            </form>

            {searched && searchResults.length === 0 && (
                <h4>Sorry, no relatives found</h4>
            )}


                <div >
                    {searchResults.length > 0 && (
                        <ul className="portrait-items-list">
                            {searchResults.map((relative) => {

                                return <Portrait
                                    key={relative.id}
                                    id={relative.id}
                                    firstName={relative.firstName}
                                    socialStatus={relative.socialStatus}
                                    amountOfKids={relative.amountOfKids}
                                />

                            })}
                        </ul>
                    )}

                </div>
        </div>
    );

            }
export default SearchForm;