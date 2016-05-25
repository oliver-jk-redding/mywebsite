import React, { Component } from 'react'
import {connect} from 'react-redux'

import Home from './Home'

class App extends Component {

  constructor() {
    super()
    this.state = {
      imageHasRendered: false
    }
  }

  componentDidMount() {
    this.setState({imageHasRendered: true})
  }

  render () {
    return (
      <div>
        {this.props.introIsRendered ? <div className='heading-container'><h1 className='animated bounceInLeft'>oliver redding - web developer</h1></div> : null}
        <div className='image-container'></div>
        {this.state.imageHasRendered ? <Home/> : <p>waiting</p>}
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