import * as React from "react";

import { BtnStyled } from "../styled/Styled";

const Btn = (props) => {
  return <BtnStyled onClick={props.onClickFunction}>{props.text}</BtnStyled>;
};

export default Btn;
