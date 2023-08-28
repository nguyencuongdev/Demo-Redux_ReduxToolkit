export const typeActions = {
    create: 'create/todo',
    search: 'search/todo',
    status: 'updateTodo/status',
    updateTodoAdd: {
        name: 'updateTodoAdd/name',
        priority: 'updateTodoAdd/priority',
        reset: 'updateTodoAdd/reset'
    },
    filter: {
        name: 'filter/todo/search',
        status: 'filter/todo/status',
        priority: 'filter/todo/priority',
    },
    updateTodo: 'update/todo/',
}


export function updateNameTodoAdd(data) {
    return {
        type: typeActions.updateTodoAdd.name,
        payload: data,
    }
}
export function updatePriorityTodoAdd(data) {
    return {
        type: typeActions.updateTodoAdd.priority,
        payload: data,
    }
}

export function resetodoAdd() {
    return {
        type: typeActions.updateTodoAdd.reset,
    }
}

export function updateStatusTodo(payload) {
    return {
        type: typeActions.status,
        payload: payload,
    }
}

export function createTodo(data) {
    return {
        type: typeActions.create,
        payload: data,
    }
}

export function searchTodo(data) {
    return {
        type: typeActions.search,
        payload: data,
    }
}

export function filterTodoByName(data) {
    return {
        type: typeActions.filter.name,
        payload: data,
    }
}
export function filterTodoByStatus(data) {
    return {
        type: typeActions.filter.status,
        payload: data,
    }
}

export function filterTodoByPriority(data) {
    return {
        type: typeActions.filter.priority,
        payload: data,
    }
}


const actions = {
    createTodo,
    searchTodo,
    updateStatusTodo,
    filterTodoByStatus,
    filterTodoByPriority,
    updateNameTodoAdd,
    updatePriorityTodoAdd,
    resetodoAdd,
}

export default actions;