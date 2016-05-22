import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, browserHistory} from 'react-router'

import {} from '../utils/index'

class Convo1 extends Component {

  constructor() {
    super()
    this.state = {
      text: this.initialText()
      nextBit1: null,
      nextBit2: null
    }
  }

  setIntroRendered(e) {
    e.preventDefault()
    this.props.setIntroRendered(true)
    browserHistory.push('/resume')
  }

  initialText() {
    return (

    )
  }

  renderBit1(e) {
    e.preventDefault()
    this.setState({
      nextBit1: <div>
        <p className={this.props.introIsRendered ? 'type' : 'type true'}>awesome!</p>
        <p className={this.props.introIsRendered ? 'type' : 'type true'}>are you also into web development?</p>
        <div className='link-wrapper'>
            <a className={this.props.introIsRendered ? 'fade' : 'fade true'} href="mailto:oliver.jk.redding@gmail.com?" target="_top">why yes!</a>
            <a className={this.props.introIsRendered ? 'fade icon' : 'fade true icon'}><span className='bar-icon2'>||</span></a>
            <a className={this.props.introIsRendered ? 'fade' : 'fade true'} onClick={this.renderBit2.bind(this)}>nope</a>
          </div>
      </div>
    })
  }

  renderBit2(e) {
    e.preventDefault()
    this.setState({
      nextBit2: <div>
        <p className={this.props.introIsRendered ? 'type' : 'type true'}>so am i!</p>
        <p className={this.props.introIsRendered ? 'type' : 'type true'}>perhaps you'd like to have a chat?</p>
        <div className='link-wrapper'>
            <a className={this.props.introIsRendered ? 'fade' : 'fade true'} href="mailto:oliver.jk.redding@gmail.com?" target="_top">sure!</a>
            <a className={this.props.introIsRendered ? 'fade icon' : 'fade true icon'}><span className='bar-icon2'>||</span></a>
            <a className={this.props.introIsRendered ? 'fade' : 'fade true'}>i'd like to get to know you better first</a>
          </div>
      </div>
    })
  }

  render() {
    return (
      <div className='page-wrapper'>
        <div className='content-wrapper'>
          <p className={this.props.introIsRendered ? 'type' : 'type true'}>oh hi there!</p>
          <p className={this.props.introIsRendered ? 'type' : 'type true'}>i'm ollie :)</p>
          <p className={this.props.introIsRendered ? 'type' : 'type true'}>do you love code as much as I do?</p>
          <div className='link-wrapper'>
            <a className={this.props.introIsRendered ? 'fade' : 'fade true'} href="mailto:oliver.jk.redding@gmail.com?" target="_top">definitely!</a>
            <a className={this.props.introIsRendered ? 'fade icon' : 'fade true icon'}><span className='bar-icon2'>||</span></a>
            <a className={this.props.introIsRendered ? 'fade' : 'fade true'} onClick={this.renderBit1.bind(this)}>i prefer other things</a>
          </div>
          {this.state.text}
          {this.state.nextBit1}
          {this.state.nextBit2}
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
      console.log('INTROISRENDERED: ', introIsRendered)
      dispatch({
        type: 'SET_INTRO_RENDERED',
        setIntroRendered: introIsRendered
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Convo1)