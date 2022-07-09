import { combineReducers } from "redux";
import visibilityFilter from './visibilityReducer'
import todos from './todoReducers'

export default combineReducers({
  todos,
  visibilityFilter
})
