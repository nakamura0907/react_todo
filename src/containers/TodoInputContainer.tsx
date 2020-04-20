import { connect } from "react-redux";
import { changeValue, addTodo } from "../actions/actions";
import TodoInput from "../components/molecules/TodoInput";

const mapStateToProps = (state) => {
  return {
    value: state.todo.value,
    btnText: "ADD!",
  };
};

const mapDispatchToProps = (dispatch) => ({
  onChange: (value) => dispatch(changeValue(value)),
  onClick: (value) => dispatch(addTodo(value)),
});

const TodoInputContainer = connect(mapStateToProps, mapDispatchToProps)(TodoInput);

export default TodoInputContainer;
