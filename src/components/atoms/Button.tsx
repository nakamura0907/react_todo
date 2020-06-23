import * as React from "react";

import {Button as BtnStyled} from "@utils/styled/Atoms";

interface Props {
  background: string;
  color: string;
  onClick: Function;
  text: string;
}

const Button: React.FC<Props> = ({ background, color, onClick, text }) => {
  return (
    <BtnStyled color={color} background={background} onClick={onClick}>
      {text}
    </BtnStyled>
  );
};

export default Button;
