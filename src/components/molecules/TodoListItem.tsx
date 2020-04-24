import * as React from "react";
import styled from "styled-components";

import Btn from "../atoms/Btn";

interface Props {
  listItem: string;
  btnText: string;
  removeTodoFunction: Function;
  completedTodoFunction: Function;
  index: number;
  id: string;
  isCompleted: boolean;
}

const TodoListItem: React.FC<Props> = ({
  listItem,
  btnText,
  removeTodoFunction,
  completedTodoFunction,
  index,
  id,
  isCompleted,
}) => {
  const handleClickRemove = (index): void => {
    removeTodoFunction(index);
  };
  const handleClickCompleted = (id): void => {
    completedTodoFunction(id);
  };
  return (
    <ListItemStyled className={isCompleted ? "" : "is-completed"}>
      <IStyled
        onClick={(): void => handleClickCompleted(id)}
        className={"far " + (isCompleted ? "fa-square" : "fa-check-square")}
      />
      <ListPStyled>{listItem}</ListPStyled>
      <Btn onClickFunction={(): void => handleClickRemove(index)} text={btnText} background="red" color="white" />
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
