import React from 'react'
import FilterLink from './containers/FilterLink'
import actionTypes from './actions/action-types'

const Footer = () => (
  <div>
    <span>Show: </span>
    <FilterLink filter={actionTypes.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={actionTypes.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={actionTypes.SHOW_COMPLETED}>Completed</FilterLink>
  </div>
)

export default Footer