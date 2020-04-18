import { combineReducers } from "redux";
import { ADD_TODO, CHANGE_VALUE } from "../actions/actions";

const TODOS = {
  todos: [],
  value: "",
};

function todo(state = TODOS, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state.todos, action.value];
    case CHANGE_VALUE:
      return Object.assign({}, state, { value: action.value });
    default:
      return state;
  }
}

const todolist = combineReducers({
  todo,
});

export default todolist;
