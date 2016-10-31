import React, { Component } from 'react'

class About extends Component {
  componentDidMount() {
    this.props.router.setRouteLeaveHook(
      this.props.route,
      this.routeWillLeave
    )
  }
  routeWillLeave(nextLocation) {
    return window.confirm('Really to leave?')
  }
  render() {
    return (
      <div>
        <div className='hd'>
          <h1>About</h1>
        </div>
        <div className='bd'>
          <p>It is an about page.</p>
          <p><code>react</code> is awesome!</p>
        </div>
      </div>
    )
  }
}

class Help extends Component {
  render() {
    return (
      <div>
        <div className='hd'>
          <h1>Help</h1>
        </div>
        <div className='bd'>
          <p>It is an help page</p>
        </div>
      </div>
    )
  }
}

export {
  About,
  Help
}
