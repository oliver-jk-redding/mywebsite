import React, { Component } from 'react'
import {connect} from 'react-redux'

import routes from '../routes'

class App extends Component {

  render () {
    return (
      <div>
        {this.props.introIsRendered ? <div className='heading-container'><h1 className='animated bounceInLeft'>oliver redding - web developer</h1></div> : null}
        <div className='image-container'></div>
        {routes}
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    introIsRendered: state.get('introIsRendered')
  }
}

export default connect(mapStateToProps)(App)