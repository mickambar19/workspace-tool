import React, { useMemo, useEffect, useReducer } from 'react'
import reducer from './reducer'
import {
  addTask,
  deleteTask,
  markTaskAsDone,
  updateTaskPosition
} from './reducer/actions'
import { TASKS_STORAGE_KEY } from './consts'
const TasksContext = React.createContext(null)

const TasksProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    reducer,
    {
      availableTasks: [],
      deletedTasks: [],
      doneTasks: []
    },
    state => {
      const localState = localStorage.getItem(TASKS_STORAGE_KEY)

      let newState = { ...state }
      if (localState !== null)
        try {
          newState = JSON.parse(localState)
        } catch (error) {
          // eslint-disable-next-line no-console
          console.log('Invalid JSON')
        }
      return newState
    }
  )

  useEffect(() => {
    localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(state))
  }, [state])

  const value = useMemo(
    () => ({
      ...state,
      addTask: addTask(dispatch),
      deleteTask: deleteTask(dispatch),
      markTaskAsDone: markTaskAsDone(dispatch),
      updateTaskPosition: updateTaskPosition(dispatch)
    }),
    [state]
  )

  return <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
}

export { TasksContext }
export default TasksProvider
