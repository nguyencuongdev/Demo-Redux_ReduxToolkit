import filterSlice from '../components/Filters/filterSlice.js';
import todoSlice from '../components/Todo/todoSlice.js';
import todoListSlice from '../components/TodoList/todoListSlice.js'
import { combineReducers } from 'redux'

// function reducer(state = {}, action) {
//     return {
//         filter: filterSlice(state.filter, action),
//         todo: todoSlice(state.todo, action),
//         todolist: todoListSlice(state.todolist, action),
//     }
// }

const reducer = combineReducers({
    filter: filterSlice,
    todo: todoSlice,
    todolist: todoListSlice,
})

export default reducer;