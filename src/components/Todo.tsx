import * as React from "react";

import { LFlex } from "./styled/Styled";
import Form from "./atoms/Form";
import Btn from "./atoms/Btn";

interface Props {
  value: string;
  onChange: Function;
  onClick: Function;
  text: string;
  todos: string[];
}

const Todo: React.FC<Props> = ({ value, onChange, onClick, text, todos }) => {
  return (
    <>
      <LFlex style={{ padding: "0 24px" }}>
        <Form value={value} onChangeFunction={(e) => onChange(e.target.value)} />
        <Btn onClickFunction={() => onClick(value)} text={text} />
      </LFlex>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <p>{todo}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
