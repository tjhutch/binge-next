import React from 'react';
import '../css/Search.css';

const Search = () => (
  <div className='home-container'>
    <h1>Binge Next</h1>
    <p>Find your next binge session</p>
    <div id='search-container'>
      <label for='title-search' className='search-label'>Title:</label>
      <input id='title-search' type='text' placeholder='The Godfather'/>
      <label htmlFor='year-search' className='search-label'>Year:</label>
      <input id='year-search' type='text' placeholder='1972'/>
    </div>
  </div>
);

export default Search;
