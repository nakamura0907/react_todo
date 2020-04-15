import * as React from "react";

interface Props {
  onChangeFunction: (e: object) => void;
  value: string;
}

const Form: React.FC<Props> = (props) => {
  return <input type="text" onChange={props.onChangeFunction} value={props.value} name="todo" className="form-text" />;
};

export default Form;
