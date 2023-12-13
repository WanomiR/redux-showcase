import { useRef, useState } from 'react'
import './task-form.css'

const TaskForm = ({ addTask }) => {
    const [taskTitle, setTaskTitle] = useState('')
    const taskTitleRef = useRef()

    const handleTaskSubmit = (event) => {
        event.preventDefault()

        addTask(taskTitle)
        setTaskTitle('')
        taskTitleRef.current?.focus()
    }

    const handleTaskTitleChange = (event) => {
        setTaskTitle(event.target.value)
    }

    return <section className="task-form">
        <h2 className="task-form-title">Новая задача</h2>
        <form className="task-form-form" onSubmit={handleTaskSubmit}>
            <input type="text" value={taskTitle} onChange={handleTaskTitleChange} ref={taskTitleRef}/>
            <button type="submit">Добавить</button>
        </form>
    </section>
}

export default TaskForm
