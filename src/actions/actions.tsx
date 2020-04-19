export const ADD_TODO = "ADD_TODO";
export const CHANGE_VALUE = "CHANGE_VALUE";

export function addTodo(value): object {
  return { type: ADD_TODO, value };
}

export function changeValue(value): object {
  return { type: CHANGE_VALUE, value };
}
