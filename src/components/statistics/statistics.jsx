import './statistics.css'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'

const Statistics = () => {
    const tasks = useSelector(state => state.tasks)
    const openedCount = useMemo(() => tasks.filter(task => !task.closed).length, [tasks])
    const closedCount = useMemo(() => tasks.length - openedCount, [tasks, openedCount])

    return <section className="statistics">
        <h2 className="statistics-title">Статистика</h2>
        <table className="statistics-table">
            <tbody>
            <tr>
                <th>Открыто</th>
                <td>{openedCount}</td>
            </tr>
            <tr>
                <th>Выполнено</th>
                <td>{closedCount}</td>
            </tr>
            </tbody>
        </table>
    </section>
}

export default Statistics
