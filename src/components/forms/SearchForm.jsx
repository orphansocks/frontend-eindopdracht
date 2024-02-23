import React, { useState } from 'react';
import './Forms.css';
import {useForm} from "react-hook-form";
import Button from "../button/Button.jsx";
import {Link} from "react-router-dom";

function SearchForm({ onSearch }) {

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {

        onSearch(data.searchQuery);
    };

    // const [searchTerm, setSearchTerm] = useState('');
    // const [searchResults, setSearchResults] = useState([]);
    //
    // const handleSearchChange = (event) => {
    //     const value = event.target.value;
    //     setSearchTerm(value);
    //
    //     const filteredResults = data.filter(item =>
    //         item.toLowerCase().includes(value.toLowerCase())
    //     );
    //
    //     setSearchResults(filteredResults);
    // };

    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    placeholder="Search"
                    {...register('searchQuery', { required: true })}
                />

                {/*<button*/}
                {/*    className="form-button"*/}
                {/*    type="submit">*/}
                {/*    Search</button>*/}

            </form>
            <p>ZOEKRESULTAAT: toon de Maries hieronder</p>
            <Link to="/relatives/:id" className="back-link">
                <p>VOOR NU: ga naar Marie</p>
            </Link>



            {/*<input*/}
            {/*    type="text"*/}
            {/*    placeholder="Search ..."*/}
            {/*    value={ searchTerm }*/}
            {/*    onChange={handleSearchChange}*/}
            {/*/>*/}

            {/*<ul>*/}
            {/*    {searchResults.map((result, index) => (*/}
            {/*        <li key={index}>{result}</li>*/}
            {/*    ))}*/}
            {/*</ul>*/}
        </div>
    );
}

export default SearchForm;