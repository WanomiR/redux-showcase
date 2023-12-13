import './task.css'
import { useDispatch } from 'react-redux'
import { closeTask, removeTask } from '../../services/slices/tasks'

const Task = ({ task }) => {
    const dispatch = useDispatch()

    const handleTaskCloseClick = () => {
        dispatch(closeTask(task.id))
    }

    const handleTaskRemoveClick = () => {
        dispatch(removeTask(task.id))
    }

    return <div className={'task ' + (task.closed ? 'closed' : '')}>
        <h3 className="task-title">{task.title}</h3>
        {!task.closed &&
            <button className="task-button" type="button" onClick={handleTaskCloseClick}>Выполнить</button>}
        <button className="task-button" type="button" onClick={handleTaskRemoveClick}>Удалить</button>
    </div>
}

export default Task
