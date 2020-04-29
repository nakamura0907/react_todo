import * as React from "react";
import classNames from "classnames";
import styled from "styled-components";

import Btn from "../atoms/Btn";

interface Todo {
  id: string;
  isCompleted: boolean;
  value: string;
}

interface Props {
  completedTodoFunction: Function;
  index: number;
  removeTodoFunction: Function;
  todo: Todo;
  updateTodoFunction: Function;
  value: string;
}

const TodoListItem: React.FC<Props> = ({
  completedTodoFunction,
  index,
  removeTodoFunction,
  todo,
  updateTodoFunction,
  value,
}) => {
  const iconClass = classNames("far", {
    "fa-square": !todo.isCompleted,
    "fa-check-square": todo.isCompleted,
  });
  const handleClickRemove = (): void => {
    removeTodoFunction(index);
  };
  const handleClickCompleted = (): void => {
    completedTodoFunction(todo.id);
  };
  const handleClickUpdate = (): void => {
    if (value) {
      updateTodoFunction(todo.id, value);
    }
  };
  return (
    <ListItemStyled className={classNames({ "is-completed": todo.isCompleted })}>
      <IStyled onClick={handleClickCompleted} className={iconClass} />
      <ListPStyled>{todo.value}</ListPStyled>
      <Btn color="black" background="yellow" text="update" onClickFunction={handleClickUpdate} />
      <Btn color="white" background="red" text="remove" onClickFunction={handleClickRemove} />
    </ListItemStyled>
  );
};

export default TodoListItem;

const IStyled = styled.i`
  margin-right: 10px;
  font-size: 32px;
`;

const ListItemStyled = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  width: 100%;
`;

const ListPStyled = styled.p`
  -ms-overflow-style: none;
  font-size: 1.2rem;
  font-weight: 300;
  overflow: scroll;
  scrollbar-width: none;
  text-align: left;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
`;
