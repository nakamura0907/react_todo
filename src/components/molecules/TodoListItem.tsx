import * as React from "react";
import styled from "styled-components";

import Btn from "../atoms/Btn";

interface Props {
  listItem: string;
  btnText: string;
}

const TodoListItem: React.FC<Props> = ({ listItem, btnText }) => {
  return (
    <ListItemStyled>
      <IStyled className="far fa-square" />
      <ListPStyled>{listItem}</ListPStyled>
      <Btn onClickFunction text={btnText} background="red" color="white" />
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
