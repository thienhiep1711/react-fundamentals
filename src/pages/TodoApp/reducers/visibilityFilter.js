import actionTypes from '../actions/action-types'

const visibilityFilter = (state = actionTypes.SHOW_ALL, action) => {
  switch (action.type) {
    case actionTypes.SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter