import * as React from "react";

import TodoListItem from "./TodoListItem";

interface Props {
  todos: string[];
  onClick: Function;
}

const TodoList: React.FC<Props> = ({ todos, onClick }) => {
  const handleClick = (id): void => {
    onClick(id);
  };
  return (
    <ul style={{ margin: "20px 24px 0 24px" }}>
      {todos.map((todo, index) => (
        <TodoListItem listItem={todo} btnText="remove" onClickFunction={handleClick} id={index} key={index} />
      ))}
    </ul>
  );
};

export default TodoList;
