import { combineReducers } from "redux";
import { ADD_TODO, CHANGE_VALUE } from "../actions/actions";

const INITIAL_STATE = {
  todos: [],
  value: "",
};

function todo(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_VALUE:
      return Object.assign({}, state, { value: action.value });
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.value], value: INITIAL_STATE.value };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  todo,
});

export default rootReducer;
