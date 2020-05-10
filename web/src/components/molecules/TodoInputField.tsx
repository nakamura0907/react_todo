import * as React from "react";
import styled from "styled-components";

import BtnIcon from "../atoms/BtnIcon";
import Form from "../atoms/Form";

interface Meta {
  error: undefined;
  touched: boolean;
}

interface Props {
  input: object;
  name: string;
  type: string;
  meta: Meta;
  onClick: Function;
}

const TodoInput: React.FC<Props> = ({ onClick, input, name, type, meta: { touched, error } }) => {
  return (
    <>
      <ErrorMessage>{touched ? error : ""}</ErrorMessage>
      <LFlex>
        <Form input={input} name={name} type={type} placeholder="テキストを入力してください。" />
        <BtnIcon color="white" background="#28a745" iconClass="fas fa-plus" onClickFunction={onClick} />
      </LFlex>
    </>
  );
};

const ErrorMessage = styled.span`
  color: red;
  display: block;
  min-height: 35px;
`;

const LFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default TodoInput;
