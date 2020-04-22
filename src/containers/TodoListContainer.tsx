import { connect } from "react-redux";
import { Actions } from "../modules/todoReducer";
import TodoList from "../components/molecules/TodoList";

const mapStateToProps = (state) => {
  return {
    todos: state.todo.todos,
    flag: state.todo.flag,
  };
};

const mapDispatchToProps = (dispatch) => ({
  removeTodoFunction: (id) => dispatch(Actions.removeTodo(id)),
  completedTodoFunction: () => dispatch(Actions.completedTodo()),
});

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoListContainer;
