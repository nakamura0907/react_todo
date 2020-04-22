import { connect } from "react-redux";
import { Actions } from "../modules/todoReducer";
import TodoList from "../components/molecules/TodoList";

const mapStateToProps = (state) => {
  return {
    todos: state.todo.todos,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onClick: (id) => dispatch(Actions.removeTodo(id)),
});

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoListContainer;
