import TaskCard from '../../components/TaskCard'
import TaskForm from '../../components/TaskForm'
import { useTasks } from '../../providers/Tasks'

import {
  RootStyled,
  TasksContainerStyled,
  CountersContainerStyled
} from './styled'

const PendingTasksDashboard = () => {
  const {
    availableTasks = [],
    deletedTasks = [],
    addTask,
    deleteTask,
    markTaskAsDone
  } = useTasks()
  return (
    <RootStyled>
      <TasksContainerStyled>
        <TaskForm
          onSubmit={taskInfo => {
            addTask(taskInfo)
          }}
        />
        {availableTasks.map(task => (
          <TaskCard
            key={task.id}
            {...task}
            onDelete={deleteTask}
            onDone={markTaskAsDone}
          />
        ))}
      </TasksContainerStyled>
      <CountersContainerStyled>
        <span>Active: {availableTasks.length}</span>
        <span>Deleted: {deletedTasks.length}</span>
      </CountersContainerStyled>
    </RootStyled>
  )
}

export default PendingTasksDashboard
