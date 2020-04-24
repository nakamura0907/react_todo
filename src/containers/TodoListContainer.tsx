import { connect } from "react-redux";
import { Actions } from "../modules/todoReducer";
import TodoList from "../components/molecules/TodoList";

const mapStateToProps = (state) => {
  return {
    todos: state.todo.todos,
  };
};

const mapDispatchToProps = (dispatch) => ({
  removeTodoFunction: (index) => dispatch(Actions.removeTodo(index)),
  completedTodoFunction: (id) => dispatch(Actions.completedTodo(id)),
});

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoListContainer;
