import { useContext } from 'react'
import { TasksContext } from './TasksProvider'

const useTasks = () => {
  const context = useContext(TasksContext)

  if (!context) {
    throw new Error(`Can't use "useTasks" without an TasksProvider!`)
  }

  return context
}

export default useTasks
