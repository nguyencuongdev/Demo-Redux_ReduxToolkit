// import { typeActions } from '../../redux/actions'

// const initialState = {
//     name: '',
//     priority: 'Medium',
//     status: 'Todo',
// }

// function todoSlice(state = initialState, action) {
//     switch (action.type) {
//         case typeActions.updateTodoAdd.name: {
//             return {
//                 ...state,
//                 name: action.payload,
//             }
//         }
//         case typeActions.updateTodoAdd.priority: {
//             return {
//                 ...state,
//                 priority: action.payload,
//             }
//         }
//         case typeActions.updateTodoAdd.reset: {
//             return {
//                 name: '',
//                 priority: 'Medium',
//                 status: 'Todo',
//             }
//         }
//         default: return initialState;
//     }
// }


import { createSlice } from '@reduxjs/toolkit';

//khi một slice reducer được tạo nó sẽ tạo ra các actions creator với type = nameSlice + field của reducer;
const todoSlice = createSlice({
    name: 'updateTodoAdd',
    initialState: {
        name: '',
        priority: 'Medium',
        status: 'Todo',
    },
    reducers: {
        name: (state, action) => {
            state.name = action.payload;
        },
        priority: (state, action) => {
            state.priority = action.payload;
        },
        reset: (state) => {
            state.name = '';
            state.priority = 'Medium';
            state.status = 'Todo';
        }
    }
})

export default todoSlice;