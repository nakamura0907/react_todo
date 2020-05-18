import { Actions } from "../src/modules/todo";
import reducer from "../src/modules";

// actions-test
describe("todoReducer-Actions", () => {
  it("actions", () => {
    const arg1 = "hoge";
    const arg2 = "hoge2";
    let expectedAction;

    // expectedAction = {
    //   type: "ADD_TODO",
    //   payload: {
    //     id: arg1,
    //     value: arg1,
    //     isCompleted: false,
    //     isForm: false,
    //   },
    // };
    // expect(Actions.addTodo(arg1)).toEqual(expectedAction);
    expectedAction = {
      type: "REMOVE_TODO",
      payload: {
        index: arg1,
      },
    };
    expect(Actions.removeTodo(arg1)).toEqual(expectedAction);
    expectedAction = {
      type: "COMPLETED_TODO",
      payload: {
        id: arg1,
      },
    };
    expect(Actions.completedTodo(arg1)).toEqual(expectedAction);
    expectedAction = {
      type: "UPDATE_TODO",
      payload: {
        id: arg1,
        value: arg2,
      },
    };
    expect(Actions.updateTodo(arg1, arg2)).toEqual(expectedAction);
    expectedAction = {
      type: "CHANGE_TEXTFORM",
      payload: {
        id: arg1,
      },
    };
    expect(Actions.changeTextform(arg1)).toEqual(expectedAction);
  });
});

describe("todoReducer-reducers", () => {
  const INITIAL_STATE = {
    form: {},
    todo: {
      todos: [],
    },
  };

  it("initialize", () => {
    expect(reducer(undefined, { type: null })).toEqual(INITIAL_STATE);
  });

  it("addTodo", () => {});

  it("removeTodo", () => {});

  it("completedTodo", () => {
    expect(
      reducer(
        {
          todo: {
            todos: [
              {
                id: 1,
                isCompleted: false,
              },
            ],
          },
        },
        { type: "COMPLETED_TODO", payload: { id: 1 } }
      )
    ).toEqual({
      form: {},
      todo: {
        todos: [
          {
            id: 1,
            isCompleted: true,
          },
        ],
      },
    });

    expect(
      reducer(
        {
          todo: {
            todos: [
              {
                id: 1,
                isCompleted: true,
              },
            ],
          },
        },
        { type: "COMPLETED_TODO", payload: { id: 1 } }
      )
    ).toEqual({
      form: {},
      todo: {
        todos: [
          {
            id: 1,
            isCompleted: false,
          },
        ],
      },
    });
  });

  it("updateTodo", () => {
    expect(
      reducer(
        {
          todo: {
            todos: [
              {
                id: 1,
                value: "hogee",
                isForm: true,
              },
            ],
          },
        },
        {
          type: "UPDATE_TODO",
          payload: {
            id: 1,
            value: "hoge",
          },
        }
      )
    ).toEqual({
      form: {},
      todo: {
        todos: [
          {
            id: 1,
            isForm: false,
            value: "hoge",
          },
        ],
      },
    });
  });

  it("changeTextform", () => {
    expect(
      reducer(
        {
          todo: {
            todos: [
              {
                id: 1,
                isForm: false,
              },
              {
                id: 2,
                isForm: false,
              },
            ],
          },
        },
        {
          type: "CHANGE_TEXTFORM",
          payload: {
            id: 2,
          },
        }
      )
    ).toEqual({
      form: {},
      todo: {
        todos: [
          {
            id: 1,
            isForm: false,
          },
          {
            id: 2,
            isForm: true,
          },
        ],
      },
    });
  });

  it("chancelUpdate", () => {
    expect(
      reducer(
        {
          todo: {
            todos: [
              {
                id: 1,
                isForm: false,
              },
              {
                id: 2,
                isForm: true,
              },
              {
                id: 3,
                isForm: false,
              },
            ],
          },
        },
        {
          type: "CHANCEL_UPDATE",
          payload: {
            id: 2,
          },
        }
      )
    ).toEqual({
      form: {},
      todo: {
        todos: [
          {
            id: 1,
            isForm: false,
          },
          {
            id: 2,
            isForm: false,
          },
          {
            id: 3,
            isForm: false,
          },
        ],
      },
    });
  });
});
