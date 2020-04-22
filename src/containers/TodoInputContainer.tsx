import { connect } from "react-redux";
import { Actions } from "../modules/todoReducer";
import TodoInput from "../components/molecules/TodoInput";

const mapStateToProps = (state) => {
  return {
    value: state.todo.value,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onChange: (value) => dispatch(Actions.changeValue(value)),
  onClick: (value) => dispatch(Actions.addTodo(value)),
});

const TodoInputContainer = connect(mapStateToProps, mapDispatchToProps)(TodoInput);

export default TodoInputContainer;
