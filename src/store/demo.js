import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducer/root'

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore)

export default createStoreWithMiddleware(rootReducer, window.devToolsExtension && window.devToolsExtension())
