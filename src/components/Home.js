import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, browserHistory} from 'react-router'

import {} from '../utils/index'
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
    switch(e.target.text) {
      case 'definitely!':
        this.setState({convoNum: '2a'})
        break
      case 'i prefer other things':
        this.setState({convoNum: '2b'})
        break
      case 'why yes!':
        this.setState({convoNum: '3a'})
        break
      case 'nope':
        this.setState({convoNum: '3b'})
        break
      case 'sure!':
        this.setState({convoNum: '4'})
        break
      case 'will do!':
        this.setState({convoNum: '4'})
        break
    }
  }

  getConvo() {
    return this.state.convoNum == 1 ? <Convo1 setNextConvo={this.setNextConvo.bind(this)}/> : this.getNextConvo()
  }

  render() {
    return (
      <div className='page-wrapper'>
        <div className='content-wrapper'>
          {this.props.introIsRendered ? <Menu/> : this.getConvo()}
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)