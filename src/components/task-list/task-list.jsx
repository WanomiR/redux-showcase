import './task-list.css'
import Task from '../task/task'
import { useSelector } from 'react-redux'
import { selectSortedTasks } from '../../services/selectors/tasks'

const TaskList = () => {
    const sortedTasks = useSelector(selectSortedTasks)

    return <section className="task-list">
        <h2 className="task-list-title">Список задач</h2>
        <ul className="task-list-list">
            {sortedTasks.length > 0 && sortedTasks.map(task => <li key={task.id}>
                <Task task={task}/>
            </li>)}
            {sortedTasks.length === 0 && <li>
                <em>Нет задач</em>
            </li>}
        </ul>
    </section>
}

export default TaskList
