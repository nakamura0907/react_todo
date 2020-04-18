import * as React from "react";

import TodoInputContainer from "../../containers/TodoInputContainer";
import TodoListContainer from "../../containers/TodoListContainer";

const TodoApp = () => {
  return (
    <>
      <TodoInputContainer />
      <TodoListContainer />
    </>
  );
};

export default TodoApp;
