import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'
import { loadTasks } from '../../utils/api'

export const getTasks = createAsyncThunk(
    'tasks/get',
    async () => {
        return { tasks: await loadTasks() }
    },
)

const initialState = {
    tasksLoaded: false,
    tasks: [],
}

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        createTask: (state, { payload }) => {
            state.tasks = [...state.tasks, { id: uuid(), title: payload, closed: false }]
        },
        closeTask: (state, { payload }) => {
            state.tasks = [...state.tasks.map(task => task.id === payload ? { ...task, closed: true } : task)]
        },
        removeTask: (state, { payload }) => {
            state.tasks = [...state.tasks.filter(task => task.id !== payload)]
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTasks.fulfilled, (state, action) => {
                state.tasksLoaded = true
                state.tasks = [...action.payload.tasks]
            })
    },
})

export const { createTask, closeTask, removeTask } = tasksSlice.actions

export default tasksSlice.reducer
