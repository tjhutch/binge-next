import React from 'react';
import heart from '../icons/heart.svg';
import heartFull from '../icons/heart-fill.svg';
import play from '../icons/play.svg'
import playFull from '../icons/play-fill.svg'
import '../css/MediaItem.css';

// info should contain response from OMDb API, which includes includes:
// Title, Year, Rated, Released, Runtime, Genre, Director, Writer, Actors, Plot, Language, Country,
// Awards, Poster, Ratings, Metascore, imdbRating, imdbVotes, imdbID, Type, DVD, BoxOffice, Production, Website

const MediaItem = ({ info, onSave, onWatched, onMoreInfo }) => (
  <div className='media-item-container'>
    <img className='media-item-poster' src={info.Poster} alt={`poster for ${info.Title}`}/>
    <div className='media-item-info'>
      <div className='media-title-and-save'>
        <h4>{info.Title} ({info.Year})</h4>
        <div>
          <img className='media-item-save' src={info.saved ? heartFull : heart} alt='save for later' onClick={onSave}/>
          {
            info.saved ? <img className='media-item-watch' src={info.watched ? playFull : play} alt='mark as watched' onClick={onWatched}/>
            : ''
          }
        </div>
      </div>
      {info.error ? <div className='error'>There was an error retrieving more info. Please try again.</div> : '' }
      {info.moreInfo ?
        <div className='more-info'><p>{info.moreInfo.Rated} | {info.moreInfo.Runtime} | {info.moreInfo.Genre} | {info.moreInfo.Director}</p>
          <p>{info.moreInfo.Plot}</p></div>
        :
        <button className='media-item-more-info' onClick={onMoreInfo}>load more info...</button>
      }
    </div>
  </div>
);

export default MediaItem;
//