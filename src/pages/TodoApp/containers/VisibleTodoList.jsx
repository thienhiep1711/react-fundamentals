import { connect } from 'react-redux'
import { toggleTodo } from '../actions/actions'
import TodoList from '../TodoList'
import actionTypes from '../actions/action-types'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case actionTypes.SHOW_ALL:
      return todos
    case actionTypes.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case actionTypes.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos.items, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)