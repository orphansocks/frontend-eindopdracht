import React, { useState } from 'react';
import './Forms.css';

function SearchField({ data }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);

        const filteredResults = data.filter(item =>
            item.toLowerCase().includes(value.toLowerCase())
        );

        setSearchResults(filteredResults);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search ..."
                value={ searchTerm }
                onChange={handleSearchChange}
            />
            <ul>
                {searchResults.map((result, index) => (
                    <li key={index}>{result}</li>
                ))}
            </ul>
        </div>
    );
}

export default SearchField;