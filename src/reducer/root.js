import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import demoReducer from './demo'

const totalReducer = Object.assign(
  {},
  demoReducer,
  {routing}
)

const rootReducer = combineReducers(totalReducer)

export default rootReducer
