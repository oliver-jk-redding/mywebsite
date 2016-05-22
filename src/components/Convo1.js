import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, browserHistory} from 'react-router'

import Convo2 from '../Convo2'

class Convo1 extends Component {

  constructor() {
    super()
    this.state = {
      text: this.initialText()
      nextBit1: null,
      nextBit2: null
    }
  }

  render() {
    return (
      <div>
        <p className={this.props.introIsRendered ? 'type' : 'type true'}>oh hi there!</p>
        <p className={this.props.introIsRendered ? 'type' : 'type true'}>i'm ollie :)</p>
        <p className={this.props.introIsRendered ? 'type' : 'type true'}>do you love code as much as I do?</p>
        <div className='link-wrapper'>
          <a className={this.props.introIsRendered ? 'fade' : 'fade true'} href="mailto:oliver.jk.redding@gmail.com?" target="_top">definitely!</a>
          <a className={this.props.introIsRendered ? 'fade icon' : 'fade true icon'}><span className='bar-icon2'>||</span></a>
          <a className={this.props.introIsRendered ? 'fade' : 'fade true'} onClick={this.renderBit1.bind(this)}>i prefer other things</a>
        </div>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    introIsRendered: state.get('introIsRendered')
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setIntroRendered: (introIsRendered) => {
      dispatch({
        type: 'SET_INTRO_RENDERED',
        setIntroRendered: introIsRendered
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Convo1)