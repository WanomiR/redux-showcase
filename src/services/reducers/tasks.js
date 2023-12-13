import { TASKS_CLOSE, TASKS_CREATE, TASKS_LOADED, TASKS_REMOVE, TASKS_UPDATE } from '../actions/tasks'
import { v4 as uuid } from 'uuid'

const initialState = {
    tasksLoaded: false,
    tasks: [],
}

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case TASKS_UPDATE:
            return { ...state, tasks: action.payload.tasks }
        case TASKS_LOADED:
            return { ...state, tasksLoaded: true }
        case TASKS_CREATE:
            return { ...state, tasks: [...state.tasks, { id: uuid(), title: action.payload.title, closed: false }] }
        case TASKS_CLOSE:
            return {
                ...state,
                tasks: [...state.tasks.map(task => task.id === action.payload.id ? { ...task, closed: true } : task)],
            }
        case TASKS_REMOVE:
            return { ...state, tasks: [...state.tasks.filter(task => task.id !== action.payload.id)] }
        default:
            return state
    }
}

export default tasksReducer
