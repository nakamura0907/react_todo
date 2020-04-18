import * as React from "react";
import styled from "styled-components";

interface Props {
  onChangeFunction: (e: object) => void;
  value: string;
}

const FormStyled = styled.input`
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14);
  box-sizing: border-box;
  height: 36px;
  width: 100%;
  &:focus {
    box-shadow: 0 8px 7px 0 rgba(17, 148, 246, 0.11);
  }
`;

const Form: React.FC<Props> = (props) => {
  return (
    <FormStyled type="text" onChange={props.onChangeFunction} value={props.value} name="todo" className="form-text" />
  );
};

export default Form;
