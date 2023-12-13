import { applyMiddleware, createStore } from 'redux'
import tasksReducer from './reducers/tasks'
import { thunk } from 'redux-thunk'

const store = createStore(tasksReducer, applyMiddleware(thunk))

export default store
