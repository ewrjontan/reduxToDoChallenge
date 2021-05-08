import * as ActionTypes from './ActionTypes'

const initialState = {
  todo: [
    { activity: 'First ToDo', complete: false },
    { activity: 'Second ToDo', complete: true },
  ],
}

export const ToDo = (state = initialState, action) => {
  switch (action.type) {
    // TASK: Change the cases to match with the code
    case ActionTypes.ADD_TODO:
      const todo = action.payload
      todo.id = state.todo.length
      return { ...state, todo: state.todo.concat(todo) }
    case ActionTypes.TOGGLE_COMPLETE:
      let updatedTodo = [...state.todo]
      updatedTodo[action.payload].complete = !updatedTodo[action.payload].complete
      return { ...state, todo: updatedTodo }
    case ActionTypes.CLEAR_TASKS:
      console.log("clearing tasks");
      return { ...state, todo: state.todo.filter((task) => !task.complete) }
    case ActionTypes.DELETE_TASKS:
      // TASK implement the final action type
      console.log("Deleting All Tasks Works!");
      return { ...state, todo: []}
    default:
      return state
  }
}
