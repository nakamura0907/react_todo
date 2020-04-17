import { combineReducers } from "redux";
import { ADD_TODO } from "../actions/actions";

const TODOS = {
  todos: [],
};

function todo(state = TODOS, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state.todos, { text: "要変更" }];
    default:
      return state;
  }
}

const todolist = combineReducers({
  todo,
});

export default todolist;
