import * as React from "react";
import styled from "styled-components";

import Btn from "../atoms/Btn";

interface Props {
  listItem: string;
  btnText: string;
  removeTodoFunction: Function;
  completedTodoFunction: Function;
  id: number;
  flag: boolean;
}

const TodoListItem: React.FC<Props> = ({ listItem, btnText, removeTodoFunction, completedTodoFunction, id, flag }) => {
  const handleClickRemove = (id): void => {
    removeTodoFunction(id);
  };
  const handleClickCompleted = (): void => {
    completedTodoFunction();
  };
  return (
    <ListItemStyled className={flag ? "" : "is-completed"}>
      <IStyled onClick={handleClickCompleted} className={"far " + (flag ? "fa-square" : "fa-check-square")} />
      <ListPStyled>{listItem}</ListPStyled>
      <Btn onClickFunction={(): void => handleClickRemove(id)} text={btnText} background="red" color="white" />
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
