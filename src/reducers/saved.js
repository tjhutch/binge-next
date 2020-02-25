import constants from '../constants';

const saved = (state = [], action) => {
  switch (action.type) {
    case constants.ADD_WATCHED:
    case constants.REMOVE_WATCHED:
      const addIndex = state.findIndex(entry => entry.imdbID === action.item.imdbID);
      const newItemArr = [].concat(state[addIndex]);
      // set true for add, false for remove
      newItemArr[0].watched = action.type === constants.ADD_WATCHED;
      return state.slice(0, addIndex)
        .concat(newItemArr)
        .concat(state.slice(addIndex + 1, state.length));
    case constants.ADD_SAVED:
      return state.concat(action.item);
    case constants.REMOVE_SAVED:
      return state.filter(item => item.imdbID !== action.item.imdbID);
    case constants.GET_MORE_INFO_SUCCESS:
    case constants.GET_MORE_INFO_FAILURE:
      const infoIndex = state.findIndex(entry => entry.imdbID === action.item.imdbID);
      if (infoIndex === -1) {
        // we don't have this item on our list
        return state;
      }
      const moreInfoItem = [].concat(state[infoIndex]);
      if (action.type === constants.GET_MORE_INFO_SUCCESS) {
        moreInfoItem[0].moreInfo = action.moreInfo;
      } else {
        moreInfoItem[0].error = action.error;
      }
      return state.slice(0, infoIndex)
        .concat(moreInfoItem)
        .concat(state.slice(infoIndex + 1, state.length));
    default:
      return state
  }
};
export default saved