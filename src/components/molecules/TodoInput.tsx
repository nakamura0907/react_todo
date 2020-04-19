import * as React from "react";

import { LFlex } from "../styled/Styled";
import Form from "../atoms/Form";
import Btn from "../atoms/Btn";

interface Props {
  value: string;
  onChange: Function;
  onClick: Function;
  text: string;
}

const TodoInput: React.FC<Props> = ({ value, onChange, onClick, text }) => {
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
        <Btn onClickFunction={handleClick} text={text} />
      </LFlex>
    </>
  );
};

export default TodoInput;
