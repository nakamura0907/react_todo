import * as React from "react";

import TodoListItem from "./TodoListItem";

interface Props {
  todos: string[];
}

const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <ul style={{ margin: "20px 24px 0 24px" }}>
      {todos.map((todo, index) => (
        <TodoListItem listItem={todo} btnText="remove" key={index} />
      ))}
    </ul>
  );
};

export default TodoList;
