import { combineReducers } from 'redux'
import saved from './saved'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  saved,
  visibilityFilter
});
