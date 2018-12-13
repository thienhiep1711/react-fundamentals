import actionTypes from '../actions/action-types';


const initialState = {
  items: [],
  loading: false,
  error: null
};

const todos = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.ADD_TODO:
        return [
          ...state,
          {
            id: action.id,
            name: action.text,
            status: false
          }
        ]
      case actionTypes.TOOGLE_TODO:
        return state.items.map(
          todo =>
            todo.id === action.id ? { ...todo, status: !todo.status } : todo
        )
      case actionTypes.FETCH_TODOS_BEGIN:
          return {
            ...state,
            loading: true,
            error: null,
          }
      case actionTypes.FETCH_TODOS_SUCCESS:
          return {
            ...state,
            loading:false,
            items: action.payload.todos
          }
      case actionTypes.FETCH_TODOS_FAILURE:
          return {
            ...state,
            loading:false,
            error: action.payload.error,
            items: []
          }
      default:
        return state
    }
  }
  
  export default todos