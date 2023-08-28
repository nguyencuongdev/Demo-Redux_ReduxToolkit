// import { typeActions } from '../../redux/actions'
// const initialState = [
//     {
//         name: 'react',
//         priority: 'Medium',
//         status: 'Todo'
//     },
//     {
//         name: 'react 2',
//         priority: 'Medium',
//         status: 'Todo'
//     },
//     {
//         name: 'react 3',
//         priority: 'Medium',
//         status: 'Todo'
//     },
// ]

// function todoListSlice(state = initialState, action) {
//     switch (action.type) {
//         case typeActions.create: {
//             return [...state, action.payload]
//         }
//         case typeActions.status: {
//             const id = action.payload.id;
//             const todoListUpdated = state;
//             todoListUpdated.forEach((todo) => {
//                 if (todo.id === id) todo.status = 'Completed';
//             })
//             return todoListUpdated;
//         }
//         default: return state;
//     }
// }


import { createSlice } from '@reduxjs/toolkit'

const todoListSlice = createSlice({
    name: 'todolist',
    initialState: [
        {
            id: 'Abcdajd_26',
            name: 'react',
            priority: 'Medium',
            status: 'Todo'
        },
        {
            id: 'Abcdajd_27',
            name: 'react 2',
            priority: 'Medium',
            status: 'Todo'
        },
        {
            id: 'Abcdajd_28',
            name: 'react 3',
            priority: 'Medium',
            status: 'Todo'
        },
    ],
    reducers: {
        create: (state, action) => {
            state.push(action.payload);
        },
        status: (state, action) => {
            state.forEach((todo) => {
                if (todo.id === action.payload) todo.status = 'Completed';
            })
        }
    }
})
export default todoListSlice;