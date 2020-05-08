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
      <SpanStyled>{touched ? error : ""}</SpanStyled>
      <LFlex>
        <Form input={input} name={name} type={type} placeholder="テキストを入力してください。" />
        <BtnIcon color="white" background="skyblue" iconClass="fas fa-plus" onClickFunction={onClick} />
      </LFlex>
    </>
  );
};

const LFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SpanStyled = styled.span`
  color: red;
  display: block;
  min-height: 35px;
`;

export default TodoInput;
