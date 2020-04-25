import * as todo from "../src/modules/todoReducer";

describe("todoReducer", () => {
  // actions-test
  it("actions", () => {
    const text = "test-text";

    let expectedAction = {
      type: "ADD_TODO",
      payload: text,
    };
    expect(todo.Actions.addTodo(text)).toEqual(expectedAction);
    expectedAction = {
      type: "CHANGE_VALUE",
      payload: text,
    };
    expect(todo.Actions.changeValue(text)).toEqual(expectedAction);
    expectedAction = {
      type: "REMOVE_TODO",
      payload: text,
    };
    expect(todo.Actions.removeTodo(text)).toEqual(expectedAction);
    expectedAction = {
      type: "COMPLETED_TODO",
      payload: text,
    };
    expect(todo.Actions.completedTodo(text)).toEqual(expectedAction);
  });

  // reducers-test
  it("reducers", () => {});
});
