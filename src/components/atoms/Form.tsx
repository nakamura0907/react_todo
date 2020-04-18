import * as React from "react";

import { FormStyled } from "../styled/Styled";

interface Props {
  value: string;
  onChangeFunction: Function;
}

const Form: React.FC<Props> = (props) => {
  return <FormStyled type="text" onChange={props.onChangeFunction} value={props.value} />;
};

export default Form;
