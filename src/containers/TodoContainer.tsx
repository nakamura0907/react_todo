import { connect } from "react-redux";
import { changeValue, addTodo } from "../actions/actions";
import Todo from "../components/Todo";

const mapStateToProps = (state) => {
  return {
    value: state.todo.value,
    todos: state.todo.todos,
    text: "ADD!",
  };
};

const mapDispatchToProps = (dispatch) => ({
  onChange: (value) => dispatch(changeValue(value)),
  onClick: (value) => dispatch(addTodo(value)),
});

const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(Todo);

export default TodoContainer;
