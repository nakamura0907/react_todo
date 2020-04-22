import * as React from "react";
import styled from "styled-components";

import Form from "../atoms/Form";
import Btn from "../atoms/Btn";

interface Props {
  value: string;
  onChange: Function;
  onClick: Function;
}

const TodoInput: React.FC<Props> = ({ value, onChange, onClick }) => {
  const handleChange = (e): void => {
    onChange(e.target.value);
  };
  const handleClick = (): void => {
    onClick(value);
  };
  return (
    <>
      <LFlex style={{ padding: "0 24px" }}>
        <Form value={value} onChangeFunction={handleChange} />
        <Btn onClickFunction={handleClick} text="ADD!" background="green" color="white" />
      </LFlex>
    </>
  );
};

export default TodoInput;

const LFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
