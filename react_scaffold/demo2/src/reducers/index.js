//There are two reducers , todo and visibilityFilter
// These two reducers are combined into one, todoApp
import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const todoApp= combineReducers({
  todos,
  visibilityFilter
})

export default todoApp
