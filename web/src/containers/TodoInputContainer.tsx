import { Actions } from "../modules/todoReducer";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";

import TodoInput from "../components/organisms/TodoInput";

const mapStateToProps = (state) => ({
  value: state.form.todoForm,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: (value): Record<string, string> => dispatch(Actions.addTodo(value)),
});

const TodoInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: "todoForm",
    enableReinitialize: true,
    initialValues: { todoForm: "" },
  })(TodoInput)
);

export default TodoInputContainer;
