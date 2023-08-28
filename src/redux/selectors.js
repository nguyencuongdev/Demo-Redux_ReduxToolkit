import { createSelector } from '@reduxjs/toolkit';

export const todoListSelector = (state) => state.todolist;
export const filterNameSelector = (state) => state.filter.search;
export const filterPrioritySelector = (state) => state.filter.priority;
export const filterStatusSelector = (state) => state.filter.status;

export const todoRemainingSelector = createSelector(
    todoListSelector, filterNameSelector,
    filterStatusSelector, filterPrioritySelector,
    (todoListSelect, searchSelect, status, priority) => {
        return todoListSelect.filter((todo) => {
            if (status === 'All') {
                if (priority.length > 0) {
                    return todo.name.includes(searchSelect) && priority.includes(todo.priority);
                }
                return todo.name.includes(searchSelect);
            }
            return todo.name.includes(searchSelect) &&
                (status === 'Completed' ? todo.status === 'Completed' : todo.status === 'Todo') &&
                (priority.length > 0 ? priority.includes(todo.priority) : true);
        })
    }
);