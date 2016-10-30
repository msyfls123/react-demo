import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router';

class Main extends Component {
  render() {
    return (
      <div className=''>
        <div id='nav' className='mod'>
         <nav className='nav nav-store'>
           <div className="inner">
             <ul className="items">
               <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
               <li><Link to="/help" activeClassName="active">Help</Link></li>
               <li><Link to="/about" activeClassName="active">About</Link></li>
             </ul>
           </div>
         </nav>
        </div>
        {this.props.children}
      </div>
    )
  }
}

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
  Main,
  About,
  Help
}
