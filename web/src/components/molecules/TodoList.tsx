import * as React from "react";
import styled from "styled-components";

import TodoListItem from "./TodoListItem";

interface TodosObject {
  id: string;
  isCompleted: boolean;
  isForm: boolean;
  value: string;
}

interface Props {
  changeTextformFunction: Function;
  completedTodoFunction: Function;
  removeTodoFunction: Function;
  reset: Function;
  todos: TodosObject[];
  todoListForm: any;
  updateTodoFunction: Function;
}

const TodoList: React.FC<Props> = ({
  changeTextformFunction,
  completedTodoFunction,
  removeTodoFunction,
  reset,
  todoListForm,
  todos,
  updateTodoFunction,
}) => {
  return (
    <TodoListStyled>
      {todos.map((todo, index) => (
        <TodoListItem
          changeTextformFunction={changeTextformFunction}
          completedTodoFunction={completedTodoFunction}
          index={index}
          key={index}
          removeTodoFunction={removeTodoFunction}
          reset={reset}
          todo={todo}
          todoListForm={todoListForm}
          updateTodoFunction={updateTodoFunction}
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
