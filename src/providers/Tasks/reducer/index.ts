import TYPES from './types'
import MD5 from 'crypto-js/md5'

const reducer = (state, { type, payload = {} }) => {
  switch (type) {
    case TYPES.ADD_TASK: {
      const { text, priority, status } = payload
      const newTaskId = MD5(text).toString()
      const TASK_TYPE_BY_STATUS = {
        ACTIVE: 'availableTasks',
        DONE: 'doneTasks',
        DELETED: 'deletedTasks'
      }
      return {
        ...state,
        [`${TASK_TYPE_BY_STATUS[status]}`]: [
          ...state.availableTasks,
          {
            id: newTaskId,
            text,
            priority,
            status
          }
        ]
      }
    }
    case TYPES.DELETE_TASK: {
      const { id } = payload
      const { availableTasks = [] } = state
      if (!id) return state
      const idx = availableTasks.findIndex(task => task.id === id)
      if (id === -1) return state
      const deletedTask = availableTasks[idx]

      return {
        ...state,
        availableTasks: [
          ...state.availableTasks.slice(0, idx),
          ...state.availableTasks.slice(idx + 1)
        ],
        deletedTasks: [...state.deletedTasks, deletedTask]
      }
    }
    case TYPES.MARK_TASK_AS_DONE: {
      const { id } = payload
      const { availableTasks = [] } = state
      if (!id) return state
      const idx = availableTasks.findIndex(task => task.id === id)
      if (id === -1) return state
      const sourceTask = availableTasks[idx]
      if (sourceTask.status === 'DONE') return state

      return {
        ...state,
        availableTasks: [
          ...state.availableTasks.slice(0, idx),
          ...state.availableTasks.slice(idx + 1)
        ],
        doneTasks: [
          ...state.doneTasks,
          {
            ...sourceTask,
            status: 'DONE'
          }
        ]
      }
    }
    case TYPES.UPDATE_TASK_POSITION: {
      const { fromTaskId, toTaskId }: Movement = payload
      const fromTaskIdx = state.availableTasks.findIndex(
        task => task.id === fromTaskId
      )
      const oldTask = state.availableTasks[fromTaskIdx]

      const newAvailableTasks = [
        ...state.availableTasks.slice(0, fromTaskIdx),
        ...state.availableTasks.slice(fromTaskIdx + 1)
      ]
      const toTaskIdx = newAvailableTasks.findIndex(
        task => task.id === toTaskId
      )
      newAvailableTasks.splice(toTaskIdx, 0, oldTask)
      return {
        ...state,
        availableTasks: [...newAvailableTasks]
      }
    }

    default:
      return state
  }
}

export default reducer
