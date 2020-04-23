import * as React from "react";
import styled from "styled-components";

import TodoListItem from "./TodoListItem";

interface Props {
  todos: string[];
  removeTodoFunction: Function;
  completedTodoFunction: Function;
}

const TodoList: React.FC<Props> = ({ todos, removeTodoFunction, completedTodoFunction }) => {
  const handleClickRemove = (id): void => {
    removeTodoFunction(id);
  };
  const handleClickCompleted = (uuid): void => {
    completedTodoFunction(uuid);
  };
  return (
    <TodoListStyled>
      {todos.map((todo, index) => (
        <TodoListItem
          listItem={todo.value}
          btnText="remove"
          removeTodoFunction={handleClickRemove}
          completedTodoFunction={handleClickCompleted}
          id={index}
          uuid={todo.id}
          isCompleted={todo.isCompleted}
          key={index}
        />
      ))}
    </TodoListStyled>
  );
};

export default TodoList;

const TodoListStyled = styled.ul`
  margin: 20px 24px 0 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
`;
