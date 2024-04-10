/**
 * SearchBar.js
 * This component is responsible for the search bar in the home page. It will only submit the text input change when the search button is pressed.
 */
import React, { useState } from 'react';

function SearchBar(props) {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="search-bar">
            <input 
                type="text" 
                placeholder="Search profiles" 
                onChange={event => setSearchTerm(event.target.value)}
            />
            <button onClick={() => props.updateSearchTerm(searchTerm)}>
                <img src="search-icon.png" alt="Search"/>
            </button>
        </div>
    );
}

export default SearchBar;
