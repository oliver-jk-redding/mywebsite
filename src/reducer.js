import {fromJS} from 'immutable'

const INITIAL_STATE = fromJS({
  introIsRendered: false
})

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SET_INTRO_RENDERED':
      return state.set('introIsRendered', fromJS(action.setIntroRendered))
    default:
      return state
  }
}