import { loadTasks } from '../../utils/api'

export const TASKS_UPDATE = 'tasks/update'
export const TASKS_LOADED = 'tasks/loaded'
export const TASKS_CREATE = 'tasks/create'
export const TASKS_CLOSE = 'tasks/close'
export const TASKS_REMOVE = 'tasks/remove'

const updateTasks = (tasks) => ({
    type: TASKS_UPDATE,
    payload: { tasks },
})

const tasksLoaded = () => ({
    type: TASKS_LOADED,
})

export const getTasks = () => (dispatch) => {
    loadTasks().then(res => dispatch(updateTasks(res))).finally(dispatch(tasksLoaded()))
}

export const createTask = (title) => ({
    type: TASKS_CREATE,
    payload: { title },
})

export const closeTask = (id) => ({
    type: TASKS_CLOSE,
    payload: { id },
})

export const removeTask = (id) => ({
    type: TASKS_REMOVE,
    payload: { id },
})
