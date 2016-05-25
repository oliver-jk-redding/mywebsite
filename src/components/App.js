import React, { Component } from 'react'
import {connect} from 'react-redux'

import Home from './Home'

class App extends Component {

  constructor() {
    super()
    this.state = {
      imageStatus: null
    }
  }

  handleImageLoaded() {
    console.log('loaded')
    this.setState({imageStatus: <Home/>})
  }

  handleImageErrored() {
    console.log('not loaded')
    this.setState({imageStatus: <Home/>});
  }

  render () {
    return (
      <div>
        {this.props.introIsRendered ? <div className='heading-container'><h1 className='animated bounceInLeft'>oliver redding - web developer</h1></div> : null}
        <div className='image-container'><img className='hidden' src='https://lh6.googleusercontent.com/-8yZ_d_xfKG0/V0OAKvU_gqI/AAAAAAAAADI/YvZeA4Y7hxc4RQqk3JEBMnRoEBlFSK8ZwCL0B/w492-h537-no/cutout.png' onLoad={this.handleImageLoaded.bind(this)} onError={this.handleImageErrored.bind(this)}/></div>
        {this.state.imageStatus}
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