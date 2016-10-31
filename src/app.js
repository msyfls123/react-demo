require('./styl/stylus/index.styl')
require('./styl/docs/styl/docs.styl')
require('./styl/demo.styl')

import React, {Component} from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import RouteCom from './container/route'
import store from './store/demo'

const history = syncHistoryWithStore(hashHistory, store)
class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history} routes={RouteCom}/>
      </Provider>
    )
  }
}

render(
  <Root />,
  document.getElementById('main')
)
