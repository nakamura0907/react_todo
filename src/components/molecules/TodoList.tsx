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
  updateTodoFunction: Function;
  value: string;
}

const TodoList: React.FC<Props> = ({ completedTodoFunction, removeTodoFunction, todos, updateTodoFunction, value }) => {
  return (
    <TodoListStyled>
      {todos.map((todo, index) => (
        <TodoListItem
          completedTodoFunction={completedTodoFunction}
          index={index}
          key={index}
          removeTodoFunction={removeTodoFunction}
          todo={todo}
          updateTodoFunction={updateTodoFunction}
          value={value}
        />
      ))}
    </TodoListStyled>
  );
};

export default TodoList;

const TodoListStyled = styled.ul`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
`;
