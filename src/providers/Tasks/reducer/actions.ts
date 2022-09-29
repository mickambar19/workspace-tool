import TYPES from './types'

export const addTask =
  dispatch =>
  ({ priority, text, status }) => {
    dispatch({
      type: TYPES.ADD_TASK,
      payload: {
        priority,
        text,
        status
      }
    })
  }

export const deleteTask =
  dispatch =>
  ({ id }) => {
    dispatch({
      type: TYPES.DELETE_TASK,
      payload: {
        id
      }
    })
  }

export const markTaskAsDone =
  dispatch =>
  ({ id }) => {
    dispatch({
      type: TYPES.MARK_TASK_AS_DONE,
      payload: {
        id
      }
    })
  }

export const updateTaskPosition =
  dispatch =>
  ({ fromTaskId, toTaskId }) => {
    dispatch({
      type: TYPES.UPDATE_TASK_POSITION,
      payload: {
        fromTaskId,
        toTaskId
      }
    })
  }
