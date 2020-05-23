import { createActions, handleActions } from "redux-actions";
import { v4 as uuidv4 } from "uuid";

// actions
export const Actions = createActions({
  ADD_TODO: (value) => ({ id: uuidv4(), value: value }),
  REMOVE_TODO: (index) => ({ index: index }),
  UPDATE_TODO: (id, value) => ({ id: id, value: value }),
});

// reducer
const INITIAL_STATE = {
  todos: [],
};

const todo = handleActions(
  {
    [Actions.addTodo]: (state, action) => ({
      ...state,
      todos: [...state.todos, action.payload],
    }),
    [Actions.removeTodo]: (state, action) => ({
      ...state,
      todos: [...state.todos.slice(0, action.payload.index), ...state.todos.slice(action.payload.index + 1)],
    }),
    [Actions.updateTodo]: (state, action) => ({
      ...state,
      todos: state.todos.map((todo) => ({
        ...todo,
        value: action.payload.id === todo.id ? action.payload.value : todo.value,
      })),
    }),
  },
  INITIAL_STATE
);

export default todo;
