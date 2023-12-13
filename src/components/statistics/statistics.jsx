import './statistics.css'
import { useSelector } from 'react-redux'
import { selectClosedCount, selectOpenedCount } from '../../services/selectors/tasks'

const Statistics = () => {
    const openedCount = useSelector(selectOpenedCount)
    const closedCount = useSelector(selectClosedCount)

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
