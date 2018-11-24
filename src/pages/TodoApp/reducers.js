import actionTypes  from './action-types';


const todos = (state = [], action) => {
    switch (action.type) {
        case actionTypes.FAILURE:
            return {
                ...state,
                ...{error: action.error,}
            }
        case actionTypes.ADD_TODO:
            return {
                ...state,
                ...{
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            }
        case actionTypes.TOOGLE_TODO:
            return state.map(
                todo => todo.id === action.id ? {...todo, completed: !todo.completed} : todo
            )
        default:
            return state
    }
}

export default todos
