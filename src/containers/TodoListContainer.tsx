import { connect } from "react-redux";
import { Actions } from "../modules/todoReducer";
import TodoList from "../components/molecules/TodoList";

const mapStateToProps = (state) => {
  return {
    todos: state.todo.todos,
    value: state.form.todoForm.values.todoForm,
  };
};

const mapDispatchToProps = (dispatch) => ({
  removeTodoFunction: (index): Record<string, number> => dispatch(Actions.removeTodo(index)),
  completedTodoFunction: (id): Record<string, string> => dispatch(Actions.completedTodo(id)),
  updateTodoFunction: (id, value): Record<string, string> => dispatch(Actions.updateTodo(id, value)),
});

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoListContainer;
