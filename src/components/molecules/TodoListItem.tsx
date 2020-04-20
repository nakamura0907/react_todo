import * as React from "react";

import { ListItemStyled, IStyled, ListPStyled } from "../styled/Styled";
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
      <Btn onClickFunction text={btnText} />
    </ListItemStyled>
  );
};

export default TodoListItem;
