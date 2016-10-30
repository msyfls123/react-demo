require('./styl/stylus/index.styl')
require('./styl/docs/styl/docs.styl')
require('./styl/demo.styl')

import React, {Component} from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import App from './component/demo'
import {Main, About, Help} from './component/other'
import store from './store/demo'

class Home extends Component {
  render() {
    return (
      <Provider store = {store}>
        <App />
      </Provider>
    )
  }
}

class Root extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Router path='/' component={Main}>
          <IndexRoute component={Home}/>
          <Route path='/help' component={Help}/>
          <Route path='/about' component={About}/>
        </Router>
      </Router>
    )
  }
}

render(
  <Root />,
  document.getElementById('main')
)
