/**
 * Home.js
 * This is the home page component. It contains the search bar, filters, and results components.
 */
import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import Filters from './Filters';
import Results from './Results';

function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({});


    return (
        <div className="home">
            <div className="home-title">
                <h1>Social Search</h1>
            </div>
            <div className="search-space">
                <div className="search-area">
                    <SearchBar updateSearchTerm={setSearchTerm} />
                </div>
                <div className="filters-area">
                    <Filters updateFilters={setFilters} />
                </div>
                <div className="results-area">
                    <Results searchTerm={searchTerm} filters={filters} />
                </div>
            </div>
        </div>
    );
}

export default Home;
