import {fromJS} from 'immutable'

const INITIAL_STATE = fromJS({
  title: 'oliver-jk-redding'
})

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default:
      return state
  }
}