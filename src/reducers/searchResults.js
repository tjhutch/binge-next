import constants from '../constants';

const searchResults = (
  state = {
    isFetching: false,
    items: [],
    page: 1,
    pages: 1,
  },
  action
) => {
  switch (action.type) {
    case constants.SEARCH_START:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case constants.SEARCH_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items,
        pages: action.pages,
      });
    case constants.SEARCH_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error,
      });
    case constants.ADD_SAVED:
    case constants.REMOVE_SAVED:
      const savedIndex = state.items.findIndex(entry => entry.imdbID === action.item.imdbID);
      const savedItem = [].concat(state.items[savedIndex]);
      // set true for add, false for remove
      savedItem[0].saved = action.type === constants.ADD_SAVED;
      return Object.assign({}, state, {
        items: state.items.slice(0, savedIndex)
          .concat(savedItem)
          .concat(state.items.slice(savedIndex + 1, state.items.length)),
      });
    case constants.ADD_WATCHED:
    case constants.REMOVE_WATCHED:
      const watchedIndex = state.items.findIndex(entry => entry.imdbID === action.item.imdbID);
      const watchedItem = [].concat(state.items[watchedIndex]);
      // set true for add, false for remove
      watchedItem[0].watched = action.type === constants.ADD_WATCHED;
      return Object.assign({}, state, {
        items: state.items.slice(0, watchedIndex)
          .concat(watchedItem)
          .concat(state.items.slice(watchedIndex + 1, state.items.length)),
      });
    case constants.GET_MORE_INFO_SUCCESS:
    case constants.GET_MORE_INFO_FAILURE:
      const infoIndex = state.items.findIndex(entry => entry.imdbID === action.item.imdbID);
      const moreInfoItem = [].concat(state.items[infoIndex]);
      if (action.type === constants.GET_MORE_INFO_SUCCESS) {
        moreInfoItem[0].moreInfo = action.moreInfo;
      } else {
        moreInfoItem[0].error = action.error;
      }
      return Object.assign({}, state, {
        items: state.items.slice(0, infoIndex)
          .concat(moreInfoItem)
          .concat(state.items.slice(infoIndex + 1, state.items.length))
      });
    case constants.SEARCH_NEXT_PAGE:
      if (state.maxPages >= state.page) {
        return state;
      }
      return Object.assign({}, state, {
        page: state.page + 1,
      });
    case constants.SEARCH_PREVIOUS_PAGE:
      if (state.page <= 1) {
        return state;
      }
      return Object.assign({}, state, {
        page: state.page - 1,
      });
    default:
      return state
  }
};

export default searchResults;