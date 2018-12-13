import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/actions'

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
      <div className="form-group">
        <div className="row">
          <div className="col-9">
            <input className="form-control" ref={node => (input = node)} />
          </div>
          <div className="col-3"> 
            <button className="btn btn-block btn-success" type="submit">Add Todo</button>
          </div>
        </div>
      </div>
      </form>
    </div>
  )
}

export default connect()(AddTodo)