require('./styl/stylus/index.styl')
require('./styl/docs/styl/docs.styl')
require('./styl/demo.styl')

import React, {Component} from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './component/demo'
import store from './store/demo'

class Root extends Component {
  render() {
    return (
      <Provider store = {store}>
        <App />
      </Provider>
    )
  }
}

render(
  <Root />,
  document.getElementById('main')
)
