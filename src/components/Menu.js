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
          <li className='animated bounceInRight'><a href="https://drive.google.com/file/d/0B9wW8F6aIlX_MmNlSmRjdGo4dzg/view?usp=sharing" target="_blank">resum&eacute;</a></li>
          <li className='animated bounceInRight'><a href="http://blog.oliverredding.com/contact/?">contact</a></li>
          <li className='animated bounceInRight'><a href="http://blog.oliverredding.com/projects/">projects</a></li>
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