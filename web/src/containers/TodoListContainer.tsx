import { Actions } from "../modules/todoReducer";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";

import TodoList from "../components/organisms/TodoList";

const mapStateToProps = (state) => {
  return {
    todos: state.todo.todos,
    todoListForm: state.form.todoListForm,
  };
};

const mapDispatchToProps = (dispatch) => ({
  removeTodoFunction: (index): Record<string, number> => dispatch(Actions.removeTodo(index)),
  completedTodoFunction: (id): Record<string, string> => dispatch(Actions.completedTodo(id)),
  updateTodoFunction: (id, value): Record<string, string> => dispatch(Actions.updateTodo(id, value)),
  changeTextformFunction: (id): Record<string, string> => dispatch(Actions.changeTextform(id)),
  chancelUpdateFunction: (): Record<string, void> => dispatch(Actions.chancelUpdate()),
});

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: "todoListForm",
    enableReinitialize: true,
    initialValues: { todoListForm: "" },
  })(TodoList)
);

export default TodoListContainer;
