import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ items, toggleTodo }) => (
  <div>
    {items.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </div>
)

TodoList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList