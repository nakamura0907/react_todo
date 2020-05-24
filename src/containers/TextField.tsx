import { Actions } from "@module/todo";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";

import TextFieldComponent from "@component/organisms/TextField";

const mapStateToProps = (state) => ({
  value: state.form.todoForm,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: (value, priority, favorite): Record<string, string> => dispatch(Actions.addTodo(value, priority, favorite)),
});

const TextField = connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: "todoForm",
    enableReinitialize: true,
    initialValues: { todoForm: "" },
  })(TextFieldComponent)
);

export default TextField;
