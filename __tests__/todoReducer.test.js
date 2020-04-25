import { Actions } from "../src/modules/todoReducer";
import rootReducer from "../src/modules/rootReducer";

// actions-test
describe("todoReducer-Actions", () => {
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
});

// reducers-test
describe("todoReducer-reducers", () => {
  it("initialize", () => {
    expect(rootReducer(undefined, {})).toEqual({
      todo: {
        todos: [],
        value: "",
      },
    });
  });

  // it("addTodo", () => {
  //   expect(rootReducer({ todo: { todos: [], value: "Jest" } }, { type: "ADD_TODO", payload: "Jest" })).toEqual({
  //     todo: {
  //       todos: [
  //         {
  //           id: ?,
  //           value: "Jest",
  //           isCompleted: true,
  //         },
  //       ],
  //       value: "",
  //     },
  //   });
  // });

  it("changeValue", () => {
    expect(rootReducer({ todo: { todos: [], value: "Jes" } }, { type: "CHANGE_VALUE", payload: "Jest" })).toEqual({
      todo: {
        todos: [],
        value: "Jest",
      },
    });

    expect(rootReducer({ todo: { todos: [], value: "Jest" } }, { type: "CHANGE_VALUE", payload: "Jes" })).toEqual({
      todo: {
        todos: [],
        value: "Jes",
      },
    });
  });

  it("removeTodo", () => {
    expect(rootReducer({ todo: { todos: [{ id: 0, value: "Jest" }] } }, { type: "REMOVE_TODO", payload: 0 })).toEqual({
      todo: {
        todos: [],
      },
    });

    expect(
      rootReducer(
        {
          todo: {
            todos: [
              { id: 0, value: "Jest" },
              { id: 1, value: "Jest1" },
            ],
          },
        },
        { type: "REMOVE_TODO", payload: 1 }
      )
    ).toEqual({
      todo: {
        todos: [
          {
            id: 0,
            value: "Jest",
          },
        ],
      },
    });
  });

  it("completedTodo", () => {
    expect(
      rootReducer({ todo: { todos: [{ id: 0, isCompleted: true }] } }, { type: "COMPLETED_TODO", payload: 0 })
    ).toEqual({
      todo: {
        todos: [
          {
            id: 0,
            isCompleted: false,
          },
        ],
      },
    });

    expect(
      rootReducer(
        {
          todo: {
            todos: [
              { id: 0, isCompleted: true },
              { id: 1, isCompleted: false },
            ],
          },
        },
        { type: "COMPLETED_TODO", payload: 1 }
      )
    ).toEqual({
      todo: {
        todos: [
          {
            id: 0,
            isCompleted: true,
          },
          {
            id: 1,
            isCompleted: true,
          },
        ],
      },
    });
  });
});
