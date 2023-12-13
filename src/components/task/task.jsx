import './task.css'

const Task = ({ task, closeTask, removeTask }) => {
    const handleTaskCloseClick = () => {
        closeTask(task.id)
    }

    const handleTaskRemoveClick = () => {
        removeTask(task.id)
    }

    return <div className={'task ' + (task.closed ? 'closed' : '')}>
        <h3 className="task-title">{task.title}</h3>
        {!task.closed && <button className="task-button" type="button" onClick={handleTaskCloseClick}>Выполнить</button>}
        <button className="task-button" type="button" onClick={handleTaskRemoveClick}>Удалить</button>
    </div>
}

export default Task
