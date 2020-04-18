import * as React from "react";

import { FormStyled } from "../styled/Styled";

const Form = (props) => {
  return <FormStyled type="text" onChange={props.onChangeFunction} value={props.value} />;
};

export default Form;
