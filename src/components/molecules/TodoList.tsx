import * as React from "react";
import styled from "styled-components";

import TodoListItem from "./TodoListItem";

interface TodosObject {
  id: string;
  isCompleted: boolean;
  value: string;
}

interface Props {
  completedTodoFunction: Function;
  removeTodoFunction: Function;
  todos: TodosObject[];
}

const TodoList: React.FC<Props> = ({ completedTodoFunction, removeTodoFunction, todos }) => {
  return (
    <TodoListStyled>
      {todos.map((todo, index) => (
        <TodoListItem
          btnText="remove"
          completedTodoFunction={completedTodoFunction}
          index={index}
          key={index}
          removeTodoFunction={removeTodoFunction}
          todo={todo}
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
