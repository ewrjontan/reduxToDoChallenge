import * as ActionTypes from './ActionTypes'

export const addTodo = (todo) => (dispatch) => {
  const newTodo = {
    activity: todo,
    complete: false,
  }
  dispatch(createTask(newTodo))
}

export const createTask = (todo) => ({
  // Task: Change this object to a redux action.
  type: ActionTypes.ADD_TODO,
  payload: todo

})

export const toggleToDo = (id) => ({
  type: ActionTypes.TOGGLE_COMPLETE,
  payload: id,
})

export const clearAllTasks = () => ({
  type: ActionTypes.CLEAR_TASKS
})

export const deleteAllTasks = () => ({
  // Task: Create an object to dispatch. use an object in this file as an example
  type: ActionTypes.DELETE_TASKS
})
