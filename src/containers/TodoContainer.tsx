import { connect } from "react-redux";
import { add_todo } from "../actions/actions";
import Todo from "../components/Todo";

const mapStateToProps = (state) => {
  return {
    todos: state.todo.todos,
    text: "ADD!",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (text) => {
      dispatch(add_todo(text));
    },
  };
};

const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(Todo);

export default TodoContainer;
