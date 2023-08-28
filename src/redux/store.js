// import { createStore } from 'redux';
// import reducer from './reducer';
// import { composeWithDevTools } from 'redux-devtools-extension';

// const composeEnhancers = composeWithDevTools();

// const store = createStore(reducer, composeEnhancers);

import { configureStore } from '@reduxjs/toolkit';
import filterSlice from '../components/Filters/filterSlice';
import todoSlice from '../components/Todo/todoSlice';
import todoListSlice from '../components/TodoList/todoListSlice';

const store = configureStore({
    reducer: {
        filter: filterSlice.reducer,
        todo: todoSlice.reducer,
        todolist: todoListSlice.reducer,
    }
});

export default store;