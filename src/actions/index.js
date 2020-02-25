import constants from '../constants';
import fetch from 'cross-fetch'

export const addSaved = item => ({
  type: constants.ADD_SAVED,
  item
});

export const removeSaved = item => ({
  type: constants.REMOVE_SAVED,
  item
});

export const addWatched = item => ({
  type: constants.ADD_WATCHED,
  item
});

export const removeWatched = item => ({
  type: constants.REMOVE_WATCHED,
  item
});

export const updateSearchTitle = title => ({
  type: constants.SEARCH_UPDATE_TITLE,
  title,
});

export const updateSearchYear = year => ({
  type: constants.SEARCH_UPDATE_YEAR,
  year,
});

export const updateSearchType = mediaType => ({
  type: constants.SEARCH_UPDATE_TYPE,
  mediaType,
});

export const searchStart = () => ({
  type: constants.SEARCH_START,
});

export const searchSuccess = (items, pages) => ({
  type: constants.SEARCH_SUCCESS,
  items,
  pages,
});

export const searchFailure = error => ({
  type: constants.SEARCH_FAILURE,
  error,
});

export const searchResetPage = () => ({
  type: constants.SEARCH_RESET_PAGE,
});

export const searchNextPage = () => ({
  type: constants.SEARCH_NEXT_PAGE,
});

export const searchPreviousPage = () => ({
  type: constants.SEARCH_PREVIOUS_PAGE,
});

export const getMoreInfoSuccess = (item, moreInfo) => ({
  type: constants.GET_MORE_INFO_SUCCESS,
  item,
  moreInfo,
});

export const getMoreInfoFailure = error => ({
  type: constants.GET_MORE_INFO_FAILURE,
  error,
});

export const getMoreInfo = item => dispatch => {
  return fetch(`${constants.API_ROOT}&i=${item.imdbID}`)
    .then(response => response.json())
    .then(json => {
      if (json.Error) {
        throw new Error(json.Error);
      }
      dispatch(getMoreInfoSuccess(item, json));
    })
    .catch(e => dispatch(getMoreInfoFailure(e)));
};

export const searchMedia = ({ title, year, type, page }) => (dispatch => {
  dispatch(searchStart());
  const yearSearch = year ? `&y=${year}` : '';
  const typeSearch = type ? `&type=${type}` : '';
  const pageSearch = page ? `&page=${page}` : '';
  return fetch(`${constants.API_ROOT}&s=${title}${yearSearch}${typeSearch}${pageSearch}`)
    .then(response => response.json())
    .then(json => {
      if (json.Error) {
        throw new Error(json.Error);
      }
      dispatch(searchSuccess(json.Search, json.totalResults / 10));
    })
    .catch(e => dispatch(searchFailure(e)));
  }
);

