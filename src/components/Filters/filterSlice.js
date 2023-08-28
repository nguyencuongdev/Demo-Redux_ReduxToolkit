// import { typeActions } from '../../redux/actions'

// const initialState = {
//     search: '',
//     status: 'All',
//     priority: [],
// }


// function filterSlice(state = initialState, action) {
//     switch (action.type) {
//         case typeActions.filter.name: {
//             return {
//                 ...state,
//                 search: action.payload,
//             }
//         }
//         case typeActions.filter.status: {
//             return {
//                 ...state,
//                 status: action.payload,
//             }
//         }
//         case typeActions.filter.priority: {
//             const priority = action.payload;
//             return {
//                 ...state,
//                 priority,
//             }
//         }
//         default: return initialState;
//     }
// }


import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        search: '',
        status: 'All',
        priority: [],
    },
    reducers: {
        name: (state, action) => {
            state.search = action.payload;
        },
        status: (state, action) => {
            state.status = action.payload;
        },
        priority: (state, action) => {
            state.priority = action.payload;
        }
    }
})
export default filterSlice;