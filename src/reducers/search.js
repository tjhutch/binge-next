import constants from '../constants';

const search = (state = { title: '', year: '', type: '', page: 1 }, action) => {
  switch (action.type) {
    case constants.SEARCH_UPDATE_TITLE:
      return Object.assign({}, state, {
        title: action.title,
      });
    case constants.SEARCH_UPDATE_YEAR:
      return Object.assign({}, state, {
        year: action.year,
      });
    case constants.SEARCH_UPDATE_TYPE:
      return Object.assign({}, state, {
        type: action.mediaType,
      });
    case constants.SEARCH_NEXT_PAGE:
      return Object.assign({}, state, {
        page: state.page + 1,
      });
    case constants.SEARCH_PREVIOUS_PAGE:
      return Object.assign({}, state, {
        page: state.page - 1,
      });
    case constants.SEARCH_SPECIFIC_PAGE:
      return Object.assign({}, state, {
        page: action.page,
      });
    case constants.SEARCH_RESET_PAGE:
      return Object.assign({}, state, {
        page: 1,
      });
    default:
      return state
  }
};
export default search