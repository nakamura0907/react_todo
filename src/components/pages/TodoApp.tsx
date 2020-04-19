import * as React from "react";

import TodoInputContainer from "../../containers/TodoInputContainer";
import TodoListContainer from "../../containers/TodoListContainer";

const TodoApp: React.FC = () => {
  return (
    <>
      <TodoInputContainer />
      <TodoListContainer />
    </>
  );
};

export default TodoApp;
