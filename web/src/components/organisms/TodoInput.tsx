import * as React from "react";
import { Field } from "redux-form";

import TodoInputField from "../molecules/TodoInputField";
import * as Validate from "../../utils/Validate";

interface Props {
  onClick: Function;
  reset: Function;
  value: any;
}

const TodoInput: React.FC<Props> = ({ onClick, reset, value }) => {
  const handleClick = (): void => {
    if (value.values.todoForm) {
      onClick(value.values.todoForm);
      reset();
    }
  };
  return (
    <Field
      name="todoForm"
      type="text"
      onClick={handleClick}
      validate={[Validate.required]}
      component={TodoInputField}
    />
  );
};

export default TodoInput;
