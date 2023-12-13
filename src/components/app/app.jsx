import Statistics from '../statistics/statistics'
import './app.css'
import TaskList from '../task-list/task-list'
import { useEffect, useState } from 'react'
import TaskForm from '../task-form/task-form'
import { loadTasks } from '../../utils/api'
import { v4 as uuid } from 'uuid'

const App = () => {
    const [tasksLoaded, setTasksLoaded] = useState(false)
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        !tasksLoaded && loadTasks().then(res => setTasks([...res])).finally(() => setTasksLoaded(true))
    }, [tasksLoaded])

    const addTask = (title) => {
        setTasks([...tasks, { id: uuid(), title, closed: false }])
    }

    const closeTask = (id) => {
        setTasks([...tasks.map(task => task.id === id ? { ...task, closed: true } : task)])
    }

    const removeTask = (id) => {
        setTasks([...tasks.filter(task => task.id !== id)])
    }

    return <div className="app">
        <main className="app-main">
            <h1 className="app-title">Задачи на день</h1>
            <div className="app-tools">
                <Statistics tasks={tasks}/>
                <TaskForm addTask={addTask}/>
            </div>
            <TaskList tasks={tasks} closeTask={closeTask} removeTask={removeTask}/>
        </main>
    </div>
}

export default App
