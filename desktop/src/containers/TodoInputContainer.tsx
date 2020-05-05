import * as React from "react";
import { connect } from "react-redux";
import { Actions } from "../modules/todoReducer";
import { Field, reduxForm } from "redux-form";

import * as Validate from "../utils/Validate";

import TodoInput from "../components/molecules/TodoInput";

interface Props {
  onClick: Function;
  reset: Function;
  value: any;
}

const TodoInputContainer: React.FC<Props> = ({ onClick, reset, value }) => {
  const handleClick = (): void => {
    if (value.values.todoForm) {
      onClick(value.values.todoForm);
      reset();
    }
  };
  return (
    <Field name="todoForm" type="text" validate={[Validate.required]} onClick={handleClick} component={TodoInput} />
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
