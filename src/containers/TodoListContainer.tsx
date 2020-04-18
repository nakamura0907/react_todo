import { connect } from "react-redux";
import TodoList from "../components/molecules/TodoList";

const mapStateToProps = (state) => {
  return {
    todos: state.todo.todos,
    text: "remove",
  };
};

const mapDispatchToProps = (dispatch) => ({});

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoListContainer;
