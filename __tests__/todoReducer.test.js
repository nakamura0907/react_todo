import { Actions } from "../src/modules/todoReducer";
import rootReducer from "../src/modules/rootReducer";

describe("todoReducer", () => {
  // actions-test
  it("actions", () => {
    const text = "test-text";

    let expectedAction = {
      type: "ADD_TODO",
      payload: text,
    };
    expect(Actions.addTodo(text)).toEqual(expectedAction);
    expectedAction = {
      type: "CHANGE_VALUE",
      payload: text,
    };
    expect(Actions.changeValue(text)).toEqual(expectedAction);
    expectedAction = {
      type: "REMOVE_TODO",
      payload: text,
    };
    expect(Actions.removeTodo(text)).toEqual(expectedAction);
    expectedAction = {
      type: "COMPLETED_TODO",
      payload: text,
    };
    expect(Actions.completedTodo(text)).toEqual(expectedAction);
  });

  // reducers-test
  it("reducers", () => {
    expect(rootReducer(undefined, {})).toEqual({
      todo: {
        todos: [],
        value: "",
      },
    });

    expect(rootReducer(undefined, {})).toEqual({
      todo: {
        todos: [],
        value: "",
      },
    });
  });
});
