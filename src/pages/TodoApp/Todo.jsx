import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, status, name }) => (
  <div
    className={`alert ${ status ? 'alert-success' : 'alert-primary'}`}
    onClick={onClick}
    style={{
      textDecoration: status ? 'line-through' : 'none'
    }}
  >
    {name}
  </div>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  status: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired
}

export default Todo