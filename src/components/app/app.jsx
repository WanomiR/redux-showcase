import Statistics from '../statistics/statistics'
import './app.css'
import TaskList from '../task-list/task-list'
import { useEffect } from 'react'
import TaskForm from '../task-form/task-form'
import { useDispatch, useSelector } from 'react-redux'
import { getTasks } from '../../services/actions/tasks'

const App = () => {
    const tasksLoaded = useSelector(state => state.tasksLoaded)
    const dispatch = useDispatch()

    useEffect(() => {
        !tasksLoaded && dispatch(getTasks())
    }, [tasksLoaded, dispatch])

    return <div className="app">
        <main className="app-main">
            <h1 className="app-title">Задачи на день</h1>
            <div className="app-tools">
                <Statistics/>
                <TaskForm/>
            </div>
            <TaskList/>
        </main>
    </div>
}

export default App
