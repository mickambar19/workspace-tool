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
    markTaskAsDone,
    updateTaskPosition
  }: {
    availableTasks: []
    deletedTasks: []
    addTask: (task: any) => void
    deleteTask: () => void
    markTaskAsDone: () => void
    updateTaskPosition: () => void
  } = useTasks()
  return (
    <RootStyled>
      <TasksContainerStyled>
        <TaskForm
          onSubmit={(taskInfo: any) => {
            addTask(taskInfo)
          }}
        />
        {availableTasks.map(
          (task: {
            id: string
            priority: string
            text: string
            status: string
          }) => (
            <TaskCard
              key={task.id}
              id={task.id}
              priority={task.priority}
              text={task.text}
              status={task.status}
              onDelete={deleteTask}
              onDone={markTaskAsDone}
              onFinishMovingCard={updateTaskPosition}
            />
          )
        )}
      </TasksContainerStyled>
      <CountersContainerStyled>
        <span>Active: {availableTasks.length}</span>
        <span>Deleted: {deletedTasks.length}</span>
      </CountersContainerStyled>
    </RootStyled>
  )
}

export default PendingTasksDashboard
