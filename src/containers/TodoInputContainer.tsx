import * as React from "react";
import { connect } from "react-redux";
import { Actions } from "../modules/todoReducer";
import { Field, reduxForm } from "redux-form";

import * as Validate from "../utils/Validate";

import TodoInput from "../components/molecules/TodoInput";

interface Props {
  value: any;
  onClick: Function;
  reset: Function;
}

const TodoInputContainer: React.FC<Props> = ({ value, onClick, reset }) => {
  const handleClick = (): void => {
    onClick(value.values.todoFormText);
    reset();
  };
  return (
    <Field name="todoFormText" type="text" validate={[Validate.required]} onClick={handleClick} component={TodoInput} />
  );
};

const mapStateToProps = (state) => ({
  value: state.form.todoForm,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: (value): Record<string, string> => dispatch(Actions.addTodo(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: "todoForm",
    enableReinitialize: true,
    initialValues: { todoForm: "" },
  })(TodoInputContainer)
);
