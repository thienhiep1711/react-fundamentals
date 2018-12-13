import {combineReducers} from 'redux';
import todos from './pages/TodoApp/reducers/todos';
import visibilityFilter from './pages/TodoApp/reducers/visibilityFilter';


export default combineReducers({
    todos,
    visibilityFilter
})
