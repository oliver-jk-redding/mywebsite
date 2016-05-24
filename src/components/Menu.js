import React, {Component} from 'react'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'

class Menu extends Component {

  handleClick(e) {
    e.preventDefault()
    switch(e.target.text) {
      case 'resume':
        this.props.setIntroRendered(true)
        browserHistory.push('/resume')
    }
  }

  componentWillMount() {
    this.props.setIntroRendered(true)
  }

  render() {
    return (
      <div>
          <ul className='nav-links'>
          <li className='animated bounceInRight'><a href="../../public/files/CV_ORedding_webdev.pdf" target="_blank">resum&eacute;</a></li>
          <li className='animated bounceInRight'><a href="mailto:oliver.jk.redding@gmail.com?" target="_top" >contact</a></li>
          <li className='animated bounceInRight'><a href="https://github.com/oliver-jk-redding" target="_blank">projects</a></li>
        </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(Menu)