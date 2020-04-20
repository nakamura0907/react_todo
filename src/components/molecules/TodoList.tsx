import * as React from "react";

import TodoListItem from "./TodoListItem";

interface Props {
  todos: string[];
  btnText: string;
}

const TodoList: React.FC<Props> = ({ todos, btnText }) => {
  return (
    <ul style={{ margin: "20px 24px 0 24px" }}>
      {todos.map((todo, index) => (
        <TodoListItem listItem={todo} btnText={btnText} key={index} />
      ))}
    </ul>
  );
};

export default TodoList;
