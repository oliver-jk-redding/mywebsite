import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

import {} from '../utils/index'

class Resume extends Component {

  render() {
    return (
      <div className='page-wrapper'>
        <h1> Resume </h1>
        <Link to='/'>Go back</Link>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    introIsRendered: state.get('introIsRendered')
  }
}

export default connect(mapStateToProps)(Resume)