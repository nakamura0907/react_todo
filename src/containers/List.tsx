import { Actions } from "@module/todo";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";

import ListComponent from "@component/organisms/List";

const mapStateToProps = (state) => {
  return {
    todos: state.todo.todos,
    todoListForm: state.form.todoListForm,
  };
};

const mapDispatchToProps = (dispatch) => ({
  removeTodo: (index): Record<string, number> => dispatch(Actions.removeTodo(index)),
  updateTodo: (id, value): Record<string, string> => dispatch(Actions.updateTodo(id, value)),
});

const List = connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: "todoListForm",
    enableReinitialize: true,
    initialValues: { todoListForm: "" },
  })(ListComponent)
);

export default List;
