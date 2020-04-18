import * as React from "react";

import { BtnStyled } from "../styled/Styled";

interface Props {
  text: string;
  onClickFunction: Function;
}

const Btn: React.FC<Props> = (props) => {
  return <BtnStyled onClick={props.onClickFunction}>{props.text}</BtnStyled>;
};

export default Btn;
