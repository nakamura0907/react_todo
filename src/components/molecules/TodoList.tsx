import * as React from "react";
import styled from "styled-components";

import List from "../atoms/List";

interface TodoItem {
  id: string;
  value: string;
}

interface Props {
  todos: TodoItem[];
  onClickFunction: (index: number) => void;
}

const TodoListUlStyled = styled.ul`
  margin-top: 20px;
  flex-direction: column-reverse;
`;

const TodoList: React.FC<Props> = (props) => {
  return (
    <TodoListUlStyled className="list l-flex">
      {props.todos.map((todo, index) => (
        <List onClickFunction={props.onClickFunction} key={todo.id} todo={todo.value} index={index} />
      ))}
    </TodoListUlStyled>
  );
};

export default TodoList;
