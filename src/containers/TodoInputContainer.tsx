import * as React from "react";
import { connect } from "react-redux";
import { Actions } from "../modules/todoReducer";
import { Field, reduxForm } from "redux-form";

import * as Validate from "../utils/Validate";

import TodoInput from "../components/molecules/TodoInput";

interface Props {
  value: any;
  onClick: Function;
}

const TodoInputContainer: React.FC<Props> = ({ value, onClick }) => {
  const handleClick = (): void => {
    onClick(value.values.todoForm);
  };
  return (
    <Field name="todoForm" type="text" validate={[Validate.required]} onClick={handleClick} component={TodoInput} />
  );
};

const mapStateToProps = (state) => ({
  value: state.form.text,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: (value): Record<string, string> => dispatch(Actions.addTodo(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: "text",
    enableReinitialize: true,
  })(TodoInputContainer)
);
