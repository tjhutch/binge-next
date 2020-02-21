import React from 'react';

// info should contain response from OMDb API, which includes includes:
// Title, Year, Rated, Released, Runtime, Genre, Director, Writer, Actors, Plot, Language, Country,
// Awards, Poster, Ratings, Metascore, imdbRating, imdbVotes, imdbID, Type, DVD, BoxOffice, Production, Website

const MediaItem = ({ info }) => (
  <div className='media-item-container'>
    <img className='media-item-poster' src={info.Poster} alt={`poster for ${info.Title}`}/>
    <div className='media-item-info'>
      <h4>{info.Title} ({info.Year})</h4>
      <div className='sub-heading'>{info.Rated} | {info.Runtime} | {info.Genre} | {info.Director}</div>
    </div>
  </div>
);

export default MediaItem;
