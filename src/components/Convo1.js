import React, {Component} from 'react'
import {connect} from 'react-redux'

class Convo1 extends Component {

  render() {
    return (
      <div>
        <p className={this.props.introIsRendered ? 'type' : 'type true'}>oh hi there!</p>
        <p className={this.props.introIsRendered ? 'type' : 'type true'}>i'm ollie :)</p>
        <p className={this.props.introIsRendered ? 'type' : 'type true'}>do you love code as much as i do?<span className='bar-icon'>|</span></p>
        <div className='link-wrapper'>
          <a className={this.props.introIsRendered ? 'fade' : 'fade true'} onClick={this.props.setNextConvo.bind(this)}>definitely!</a>
          <a className={this.props.introIsRendered ? 'fade icon' : 'fade true icon'}><span className='bar-icon2'>||</span></a>
          <a className={this.props.introIsRendered ? 'fade' : 'fade true'} onClick={this.props.setNextConvo.bind(this)}>i prefer other things</a>
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

export default connect(mapStateToProps)(Convo1)