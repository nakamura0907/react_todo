import { createActions, handleActions } from "redux-actions";

// actions
export const Actions = createActions({
  ADD_TODO: (value) => value,
  CHANGE_VALUE: (value) => value,
});

// reducer
const INITIAL_STATE = {
  todos: [],
  value: "",
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
  },
  INITIAL_STATE
);

export default todo;
