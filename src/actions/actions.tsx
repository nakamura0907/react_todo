export const ADD_TODO = "ADD_TODO";
export const CHANGE_VALUE = "CHANGE_VALUE";

export function addTodo(value) {
  return { type: ADD_TODO, value };
}

export function changeValue(value) {
  return { type: CHANGE_VALUE, value };
}
