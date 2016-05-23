import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, browserHistory} from 'react-router'

class Convo2 extends Component {

  render() {
    return (
      <div>
        {this.props.option == 'a' ?
          <div>
            <p className={this.props.introIsRendered ? 'type' : 'type true'}>awesome!</p>
            <p className={this.props.introIsRendered ? 'type' : 'type true'}>are you into web development?<span className='bar-icon'>|</span></p>
            <div className='link-wrapper'>
              <a className={this.props.introIsRendered ? 'fade' : 'fade two true'} onClick={this.props.setNextConvo.bind(this)}>why yes!</a>
              <a className={this.props.introIsRendered ? 'fade icon' : 'fade two true icon'}><span className='bar-icon2'>||</span></a>
              <a className={this.props.introIsRendered ? 'fade' : 'fade two true'} onClick={this.props.setNextConvo.bind(this)}>nope</a>
            </div>
          </div>
        :
          <div>
            <p className={this.props.introIsRendered ? 'type' : 'type true'}>that's okay...</p>
            <p className={this.props.introIsRendered ? 'type' : 'type true'}>let me know if you change your mind :)<span className='bar-icon'>|</span></p>
            <div className='link-wrapper'>
              <a className={this.props.introIsRendered ? 'fade' : 'fade two true'} onClick={this.props.setNextConvo.bind(this)}>will do!</a>
            </div>
          </div>
        }
      </div>)
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

export default connect(mapStateToProps, mapDispatchToProps)(Convo2)