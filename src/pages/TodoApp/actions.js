import actionTypes from './action-types';

let nextTodoId = 0;

export function failure(error) {
    return {
        type: actionTypes.FAILURE,
        error,
    }
}


export function addTodo(text) {
    return {
        type: actionTypes.ADD_TODO,
        id: nextTodoId++,
        text,
    }
}

export function toogleTodo(id) {
    return {
        type: actionTypes.TOOGLE_TODO,
        id,
    }
}
