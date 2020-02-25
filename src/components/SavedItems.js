import React from 'react';
import MediaItem from './MediaItem';

const SearchResults = ({ items, onSave }) => (
  <ul>
    {items.map((mediaItem, index) => (
      <li key={index}>
        <MediaItem info={mediaItem} onSave={() => {
          onSave(items[index], index);
        }}/>
      </li>
    ))}
  </ul>
);

export default SearchResults;
