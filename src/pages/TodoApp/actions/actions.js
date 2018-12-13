import service from '../../../service/index';
import actionTypes from './action-types';


let nextTodoId = 0
export const addTodo = text => ({
  type: actionTypes.ADD_TODO,
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: actionTypes.SET_VISIBILITY_FILTER,
  filter
})

export const toggleTodo = id => ({
  type: actionTypes.TOOGLE_TODO,
  id
})

export const fetchTodosBegin = () => ({
  type: actionTypes.FETCH_TODOS_BEGIN
});

export const fetchTodosSuccess = todos => ({
  type: actionTypes.FETCH_TODOS_SUCCESS,
  payload: {todos}
})

export const fecthTodosFailure = error => ({
  type: actionTypes.FETCH_TODOS_FAILURE,
  payload: {error}
})

export function fetchTodos() {
  return dispatch => {
    dispatch(fetchTodosBegin());
    return fetch(service.getTodos)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchTodosSuccess(json));
        return(error => dispatch(fecthTodosFailure(error)));
        
      })
  }
}


function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}