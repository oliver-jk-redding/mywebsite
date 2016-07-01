import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, browserHistory} from 'react-router'

import {clickHandler} from '../utils/index'
import Convo1 from './Convo1'
import Convo2 from './Convo2'
import Convo3 from './Convo3'
import Menu from './Menu'

class Home extends Component {

  constructor() {
    super()
    this.state = {
      convoNum: '1'
    }
  }

  getNextConvo() {
    switch(this.state.convoNum) {
      case '2a':
        return <Convo2 option='a' setNextConvo={this.setNextConvo.bind(this)}/>
        break
      case '2b':
        return <Convo2 option='b' setNextConvo={this.setNextConvo.bind(this)}/>
        break
      case '3a':
        return <Convo3 option = 'a' setNextConvo={this.setNextConvo.bind(this)}/>
        break
      case '3b':
        return <Convo3 option = 'b' setNextConvo={this.setNextConvo.bind(this)}/>
        break
      case '4':
        return <Menu/>
        break
    }
  }

  setNextConvo(e) {
    e.preventDefault
    this.setState({convoNum: clickHandler(e.target.text)})
  }

  getConvo() {
    return this.state.convoNum == 1 ? <Convo1 setNextConvo={this.setNextConvo.bind(this)}/> : this.getNextConvo()
  }

  render() {
    return (
      <div className='page-wrapper'>
        <div className='content-wrapper'>
          {this.props.introIsRendered ? <Menu/> : this.getConvo()}
          {this.props.introIsRendered ? null : <a id="skip" className="fade" onClick={this.setNextConvo.bind(this)}>[skip]</a>}
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

export default connect(mapStateToProps)(Home)