import { combineReducers } from 'redux'
import saved from './saved'
import searchResults from './searchResults';
import search from './search';

export default combineReducers({
  saved,
  searchResults,
  search,
});
