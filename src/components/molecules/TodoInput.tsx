import * as React from "react";
import styled from "styled-components";

import Btn from "../atoms/Btn";

interface Meta {
  touched: boolean;
  error: undefined;
}

interface Props {
  input: object;
  name: undefined;
  type: string;
  meta: Meta;
  onClick: Function;
}

const TodoInput: React.FC<Props> = ({ input, name, type, meta: { touched, error }, onClick }) => {
  return (
    <>
      {touched && error && <span style={{ color: "red" }}>{error}</span>}
      <LFlex style={{ padding: "0 24px" }}>
        <FormStyled {...input} name={name} type={type} />
        <Btn onClickFunction={onClick} text="ADD!" background="green" color="white" />
      </LFlex>
    </>
  );
};

const FormStyled = styled.input`
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14);
  box-sizing: border-box;
  height: 36px;
  width: 100%;
  &:focus {
    box-shadow: 0 8px 7px 0 rgba(17, 148, 246, 0.11);
  }
`;

const LFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default TodoInput;
