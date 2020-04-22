import { createActions, handleActions } from "redux-actions";

// actions
export const Actions = createActions(
  {
    ADD_TODO: (value) => value,
    CHANGE_VALUE: (value) => value,
    REMOVE_TODO: (id) => id,
  },
  "COMPLETED_TODO"
);

// reducer
const INITIAL_STATE = {
  todos: [],
  value: "",
  flag: true,
};

const todo = handleActions(
  {
    [Actions.changeValue]: (state, action) => ({
      ...state,
      value: action.payload,
    }),
    [Actions.addTodo]: (state, action) => ({
      ...state,
      todos: [...state.todos, action.payload],
      value: INITIAL_STATE.value,
    }),
    [Actions.removeTodo]: (state, action) => ({
      ...state,
      todos: [...state.todos.slice(0, action.payload), ...state.todos.slice(action.payload + 1)],
    }),
    [Actions.completedTodo]: (state) => ({
      ...state,
      flag: !state.flag,
    }),
  },
  INITIAL_STATE
);

export default todo;
