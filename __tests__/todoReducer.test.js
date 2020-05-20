import { Actions } from "../src/modules/todo";
import reducer from "../src/modules";
import { v4 as uuidv4 } from "uuid";

jest.mock("uuid");

// actions-test
describe("todoReducer-Actions", () => {
  const arg1 = "hoge";
  const arg2 = "hoge2";
  let expectedAction;
  uuidv4.mockImplementation(() => "testid");

  it("ADD_TODO", () => {
    expectedAction = {
      type: "ADD_TODO",
      payload: {
        id: "testid",
        value: arg1,
        isCompleted: false,
        isForm: false,
      },
    };
    expect(Actions.addTodo(arg1)).toEqual(expectedAction);
  });
  it("REMOVE_TODO", () => {
    expectedAction = {
      type: "REMOVE_TODO",
      payload: {
        index: arg1,
      },
    };
    expect(Actions.removeTodo(arg1)).toEqual(expectedAction);
  });
  it("COMPLETE_TODO", () => {
    expectedAction = {
      type: "COMPLETE_TODO",
      payload: {
        id: arg1,
      },
    };
    expect(Actions.completeTodo(arg1)).toEqual(expectedAction);
  });
  it("UPDATE_TODO", () => {
    expectedAction = {
      type: "UPDATE_TODO",
      payload: {
        id: arg1,
        value: arg2,
      },
    };
    expect(Actions.updateTodo(arg1, arg2)).toEqual(expectedAction);
  });
  it("CHANGE_TEXTFORM", () => {
    expectedAction = {
      type: "CHANGE_TEXTFORM",
      payload: {
        id: arg1,
      },
    };
    expect(Actions.changeTextform(arg1)).toEqual(expectedAction);
  });
});

const INITIAL_STATE = {
  form: {},
  todo: {
    todos: [],
  },
};

describe("todoReducer_INITIALIZE", () => {
  it("initialize", () => {
    expect(reducer(undefined, { type: null })).toEqual(INITIAL_STATE);
  });
});

describe("addTodo", () => {
  it("value = hoge", () => {
    expect(reducer(undefined, { type: "ADD_TODO", payload: { value: "hoge" } })).toEqual({
      form: {},
      todo: { todos: [{ value: "hoge" }] },
    });
  });

  it("value = fuga", () => {
    expect(reducer(undefined, { type: "ADD_TODO", payload: { value: "fuga" } })).toEqual({
      form: {},
      todo: { todos: [{ value: "fuga" }] },
    });
  });
});

describe("completeTodo", () => {
  it("true -> false", () => {
    expect(
      reducer(
        {
          todo: {
            todos: [
              { id: 1, isCompleted: true },
              { id: 2, isCompleted: false },
              { id: 3, isCompleted: true },
            ],
          },
        },
        { type: "COMPLETE_TODO", payload: { id: 1 } }
      )
    ).toEqual({
      form: {},
      todo: {
        todos: [
          { id: 1, isCompleted: false },
          { id: 2, isCompleted: false },
          { id: 3, isCompleted: true },
        ],
      },
    });
  });

  describe("removeTodo", () => {
    it("remove ID 1", () => {
      expect(
        reducer(
          {
            todo: {
              todos: [
                {
                  id: 1,
                  value: "hoge",
                },
                {
                  id: 2,
                  value: "fuga",
                },
                {
                  id: 3,
                  value: "piyo",
                },
              ],
            },
          },
          { type: "REMOVE_TODO", payload: { id: 1 } }
        )
      ).toEqual({
        form: {},
        todo: {
          todos: [
            {
              id: 1,
              value: "fuga",
            },
            {
              id: 2,
              value: "piyo",
            },
          ],
        },
      });
    });
  });

  it("false -> true", () => {
    expect(
      reducer({ todo: { todos: [{ id: 1, isCompleted: false }] } }, { type: "COMPLETE_TODO", payload: { id: 1 } })
    ).toEqual({ form: {}, todo: { todos: [{ id: 1, isCompleted: true }] } });
  });
});

describe("updateTodo", () => {
  it("hoga -> hoge", () => {
    expect(
      reducer(
        {
          todo: {
            todos: [
              { id: 1, value: "hoga", isForm: true },
              { id: 2, value: "fuga", isForm: false },
              { id: 3, value: "piyo", isForm: false },
            ],
          },
        },
        { type: "UPDATE_TODO", payload: { id: 1, value: "hoge" } }
      )
    ).toEqual({
      form: {},
      todo: {
        todos: [
          { id: 1, value: "hoge", isForm: false },
          { id: 2, value: "fuga", isForm: false },
          { id: 3, value: "piyo", isForm: false },
        ],
      },
    });
  });

  it("hoge -> fuga", () => {
    expect(
      reducer(
        {
          todo: {
            todos: [{ id: 1, value: "hoga", isForm: true }],
          },
        },
        { type: "UPDATE_TODO", payload: { id: 1, value: "fuga" } }
      )
    ).toEqual({
      form: {},
      todo: {
        todos: [{ id: 1, value: "fuga", isForm: false }],
      },
    });
  });
});

describe("changeTextform", () => {
  it("false -> true", () => {
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
            id: 1,
          },
        }
      )
    ).toEqual({
      form: {},
      todo: {
        todos: [
          {
            id: 1,
            isForm: true,
          },
          {
            id: 2,
            isForm: false,
          },
        ],
      },
    });
  });
});

describe("cancelUpdate", () => {
  it("true -> false", () => {
    expect(
      reducer(
        {
          todo: {
            todos: [
              {
                id: 1,
                isForm: true,
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
        },
        { type: "CANCEL_UPDATE", payload: { id: 1 } }
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
