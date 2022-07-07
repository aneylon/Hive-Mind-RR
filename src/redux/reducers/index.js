import { combineReducers } from "redux";
import visbilityFilter from './visibilityReducer'
import todos from './todoReducers'

export default combineReducers({
  todos,
  visbilityFilter
})