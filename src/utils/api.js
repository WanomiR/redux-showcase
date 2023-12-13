import { v4 as uuid } from 'uuid'

const TIMEOUT = 2000

export const loadTasks = () => new Promise(resolve => {
    setTimeout(() => {
        resolve([
            { id: uuid(), title: 'Ознакомиться с проектом', closed: false },
            { id: uuid(), title: 'Переписать проект на Redux', closed: false }
        ])
    }, TIMEOUT)
})
