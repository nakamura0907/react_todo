// actions
const ADD_TODO = "ADD_TODO";
const CHANGE_VALUE = "CHANGE_VALUE";

export function addTodo(value): object {
  return { type: ADD_TODO, value };
}

export function changeValue(value): object {
  return { type: CHANGE_VALUE, value };
}

// reducer
const INITIAL_STATE = {
  todos: [],
  value: "",
};

function todo(state = INITIAL_STATE, action): object {
  switch (action.type) {
    case CHANGE_VALUE:
      return Object.assign({}, state, { value: action.value });
    case ADD_TODO:
      if (!action.value) {
        return state;
      }
      return { ...state, todos: [...state.todos, action.value], value: INITIAL_STATE.value };
    default:
      return state;
  }
}

export default todo;
