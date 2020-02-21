import constants from '../constants';
let nextTodoId = 0;

export const addSaved = mediaItem => ({
  type: constants.ADD_SAVED,
  id: nextTodoId++,
  text: mediaItem
});

export const setVisibilityFilter = filter => ({
  type: constants.SET_VISIBILITY_FILTER,
  filter
});

export const removeSaved = id => ({
  type: constants.REMOVE_SAVED,
  id
});

export const VisibilityFilters = {
  ...constants.VISIBILITY_FILTERS,
};

export const searchMedia = ({ search, year }) => (dispatch => {
  return fetch(`${constants.API_ROOT}&s=${search}&y=${year}`)
    .then(response => response.json())
    .then(json => dispatch({type: constants.SEARCH_MEDIA, json}))
    .catch(e => console.log(`Failed to get API data: ${e}`));
  }
);

