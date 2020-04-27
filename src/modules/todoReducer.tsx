import { createActions, handleActions } from "redux-actions";
import { v4 as uuidv4 } from "uuid";

// actions
export const Actions = createActions({
  ADD_TODO: (value) => value,
  REMOVE_TODO: (index) => index,
  COMPLETED_TODO: (id) => id,
});

// reducer
const INITIAL_STATE = {
  todos: [],
  // value: "",
};

const todo = handleActions(
  {
    [Actions.addTodo]: (state, action) => ({
      ...state,
      todos: [...state.todos, { id: uuidv4(), value: action.payload, isCompleted: false }],
      // value: INITIAL_STATE.value,
    }),
    [Actions.removeTodo]: (state, action) => ({
      ...state,
      todos: [...state.todos.slice(0, action.payload), ...state.todos.slice(action.payload + 1)],
    }),
    [Actions.completedTodo]: (state, action) => ({
      ...state,
      todos: state.todos.map((todo) => ({
        ...todo,
        isCompleted: action.payload === todo.id ? !todo.isCompleted : todo.isCompleted,
      })),
    }),
  },
  INITIAL_STATE
);

export default todo;
