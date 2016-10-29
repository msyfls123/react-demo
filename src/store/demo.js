import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import demoReducer from '../reducer/demo'

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore)

export default createStoreWithMiddleware(demoReducer, window.devToolsExtension && window.devToolsExtension())
