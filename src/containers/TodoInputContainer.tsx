import { connect } from "react-redux";
import { Actions } from "../modules/todoReducer";
import TodoInput from "../components/molecules/TodoInput";

const mapStateToProps = (state) => {
  return {
    value: state.todo.value,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onChange: (value): Record<string, string> => dispatch(Actions.changeValue(value)),
  onClick: (value): Record<string, string> => dispatch(Actions.addTodo(value)),
});

const TodoInputContainer = connect(mapStateToProps, mapDispatchToProps)(TodoInput);

export default TodoInputContainer;
