import * as React from "react";

import TodoListItem from "./TodoListItem";

interface Props {
  todos: string[];
  removeTodoFunction: Function;
  completedTodoFunction: Function;
  flag: boolean;
}

const TodoList: React.FC<Props> = ({ todos, removeTodoFunction, completedTodoFunction, flag }) => {
  const handleClickRemove = (id): void => {
    removeTodoFunction(id);
  };
  const handleClickCompleted = (): void => {
    completedTodoFunction();
  };
  return (
    <ul style={{ margin: "20px 24px 0 24px" }}>
      {todos.map((todo, index) => (
        <TodoListItem
          listItem={todo}
          btnText="remove"
          removeTodoFunction={handleClickRemove}
          completedTodoFunction={handleClickCompleted}
          id={index}
          flag={flag}
          key={index}
        />
      ))}
    </ul>
  );
};

export default TodoList;
