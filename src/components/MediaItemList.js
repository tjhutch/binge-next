import React from 'react';
import MediaItem from './MediaItem';
import '../css/MediaItemList.css';

const MediaItemList = ({title, items, onSave, onWatched, onMoreInfo}) =>  (
  <div className='media-list-container'>
    <h2>{items && items.length? title : ''}</h2>
    <ul>
      {items ? items.map((mediaItem, index) => (
        <li key={index}>
          <MediaItem info={mediaItem} onSave={() => {
            onSave(items[index], index);
          }} onWatched={() => {
            onWatched(items[index], index);
          }} onMoreInfo={() => {
            onMoreInfo(items[index]);
          }}/>
        </li>
      )) : ''}
    </ul>
  </div>
);

export default MediaItemList;
