import * as React from "react";
import styled from "styled-components";

import TodoListItem from "../molecules/TodoListItem";

interface TodosObject {
  id: string;
  isCompleted: boolean;
  isForm: boolean;
  value: string;
}

interface Props {
  chancelUpdateFunction: Function;
  changeTextformFunction: Function;
  completedTodoFunction: Function;
  initialize: Function;
  removeTodoFunction: Function;
  reset: Function;
  todos: TodosObject[];
  todoListForm: any;
  updateTodoFunction: Function;
}

const TodoList: React.FC<Props> = ({
  chancelUpdateFunction,
  changeTextformFunction,
  completedTodoFunction,
  initialize,
  removeTodoFunction,
  reset,
  todoListForm,
  todos,
  updateTodoFunction,
}) => {
  return (
    <List>
      {todos.map((todo, index) => (
        <TodoListItem
          chancelUpdateFunction={chancelUpdateFunction}
          changeTextformFunction={changeTextformFunction}
          completedTodoFunction={completedTodoFunction}
          index={index}
          initialize={initialize}
          key={index}
          removeTodoFunction={removeTodoFunction}
          reset={reset}
          todo={todo}
          todoListForm={todoListForm}
          updateTodoFunction={updateTodoFunction}
        />
      ))}
    </List>
  );
};

const List = styled.ul`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
`;

export default TodoList;
