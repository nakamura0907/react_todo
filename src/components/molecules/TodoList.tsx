import * as React from "react";
import styled from "styled-components";

import TodoListItem from "./TodoListItem";

interface TodosObject {
  value: string;
  isCompleted: boolean;
  id: string;
}

interface Props {
  todos: TodosObject[];
  removeTodoFunction: Function;
  completedTodoFunction: Function;
}

const TodoList: React.FC<Props> = ({ todos, removeTodoFunction, completedTodoFunction }) => {
  const handleClickRemove = (index): void => {
    removeTodoFunction(index);
  };
  const handleClickCompleted = (id): void => {
    completedTodoFunction(id);
  };
  console.log(todos);
  return (
    <TodoListStyled>
      {todos.map((todo, index) => (
        <TodoListItem
          listItem={todo.value}
          btnText="remove"
          removeTodoFunction={handleClickRemove}
          completedTodoFunction={handleClickCompleted}
          index={index}
          id={todo.id}
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
