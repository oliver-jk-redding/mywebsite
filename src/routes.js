import React from 'react'
import {Router, Route, browserHistory} from 'react-router'

import Home from './components/Home'
import Resume from './components/Resume'

export default (
  <Router history={browserHistory}>
    <Route path='/' component={Home} />
    <Route path='/resume' component={Resume} />
  </Router>
)