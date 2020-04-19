import * as React from "react";

import { ListItemStyled, IStyled, ListPStyled } from "../styled/Styled";
import Btn from "../atoms/Btn";

interface Props {
  todos: string[];
  text: string;
}

const TodoList: React.FC<Props> = ({ todos, text }) => {
  return (
    <ul style={{ margin: "20px 24px 0 24px" }}>
      {todos.map((todo, index) => (
        <ListItemStyled key={index}>
          <IStyled className="far fa-square" />
          <ListPStyled>{todo}</ListPStyled>
          <Btn onClickFunction text={text} />
        </ListItemStyled>
      ))}
    </ul>
  );
};

export default TodoList;
