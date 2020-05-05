import * as React from "react";
import styled from "styled-components";

import Btn from "../atoms/Btn";

interface Meta {
  error: undefined;
  touched: boolean;
}

interface Props {
  input: object;
  meta: Meta;
  name: undefined;
  onClick: Function;
  type: string;
}

const TodoInput: React.FC<Props> = ({ input, meta: { error, touched }, name, onClick, type }) => {
  return (
    <>
      {touched && error && <span style={{ color: "red" }}>{error}</span>}
      <LFlex>
        <FormStyled {...input} name={name} type={type} placeholder="テキストを入力してください。" />
        <Btn color="white" background="green" text="ADD!" onClickFunction={onClick} />
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