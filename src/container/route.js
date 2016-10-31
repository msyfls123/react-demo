import React, {Component} from 'react'
import { Link, IndexLink, Route, IndexRoute } from 'react-router';
import * as container from './container'

const linkList = Object.keys(container)
const index = linkList.findIndex(function(value){
  return value==='Demo'
})
linkList.splice(index, 1)

class Main extends Component {
  render() {
    const linkMap = linkList.map(d => (
      <li><Link to={'/'+d.toLowerCase()} activeClassName='active'>{d}</Link></li>
    ))
    return (
      <div className=''>
        <div id='nav' className='mod'>
         <nav className='nav nav-store'>
           <div className="inner">
             <ul className="items">
               <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
               { linkMap }
             </ul>
           </div>
         </nav>
        </div>
        {this.props.children}
      </div>
    )
  }
}

const compMap = linkList.map(d => (
  <Route path={'/'+d.toLowerCase()} component={container[d]}/>
))

export default (
  <Route path='/' component={Main}>
    <IndexRoute component={container['Demo']}/>
    { compMap }
  </Route>
)
