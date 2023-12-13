import { createSelector } from '@reduxjs/toolkit'

export const selectTasksLoaded = state => state.tasks.tasksLoaded

export const selectTasks = state => state.tasks.tasks

export const selectSortedTasks = createSelector(
    selectTasks,
    tasks => [...tasks].sort((a, b) => {
            if (a.closed === b.closed) {
                return 0
            }

            return a.closed ? 1 : -1
        },
    ),
)

export const selectOpenedCount = createSelector(
    selectTasks,
    tasks => tasks.filter(task => !task.closed).length,
)

export const selectClosedCount = createSelector(
    selectTasks,
    tasks => tasks.filter(task => task.closed).length,
)
