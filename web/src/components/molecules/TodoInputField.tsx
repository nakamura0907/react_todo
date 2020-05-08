import * as React from "react";
import styled from "styled-components";

import Btn from "../atoms/Btn";
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
  if (!touched) {
    return (
      <>
        <SpanStyled></SpanStyled>
        <LFlex>
          <Form input={input} name={name} type={type} placeholder="テキストを入力してください。" />
          <Btn color="white" background="green" text="ADD!" onClickFunction={onClick} />
        </LFlex>
      </>
    );
  } else {
    return (
      <>
        <SpanStyled>{error}</SpanStyled>
        <LFlex>
          <Form input={input} name={name} type={type} placeholder="テキストを入力してください。" />
          <Btn color="white" background="green" text="ADD!" onClickFunction={onClick} />
        </LFlex>
      </>
    );
  }
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
