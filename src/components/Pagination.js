import React from 'react';
import left from '../icons/arrow-left-short.svg';
import right from '../icons/arrow-right-short.svg';

const MediaItemList = ({page, pages, items, nextPage, previousPage, specificPage}) =>  {
  let previousPages;
  let nextPages;
  if (page > 1) {
    previousPages = [];
    for (let i = page - 1; i > 0 && i > page - 5; i--) {
      previousPages.unshift(i);
    }
  }
  if (page < pages) {
    nextPages = [];
    for (let i = page + 1; i < pages && i < page + 5; i++) {
      nextPages.push(i);
    }
  }
  return (
    <div className='pagination-container'>
      {items.length ?
        <p> showing {((page - 1) * 10) + 1} through {page * 10} of {10 * pages} entries</p> : ''
      }
      {pages > 1 ?
        <div id='pagination-display'>
          {page > 1 ?
            <div className='pagination-pages'>
              <img src={left} className='arrow-icon' alt='go to previous page' onClick={previousPage}/>
              {previousPages.map(i => (<div onClick={() => specificPage(i)}>{i}</div>))}
            </div>: ''}
          {<div className='current-page'>{page}</div>}
          {page < pages ?
            <div className='pagination-pages'>
              {nextPages.map(i => (<div onClick={() => specificPage(i)}>{i}</div>))}
              <img src={right} className='arrow-icon' alt='go to next page' onClick={nextPage}/>
            </div>: ''}
        </div> : ''
      }
    </div>
  );
}

export default MediaItemList;
