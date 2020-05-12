import * as React from "react";
import styled from "styled-components";

import Item from "../molecules/Item";

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

const List: React.FC<Props> = ({
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
    <ListStyled>
      {todos.map((todo, index) => (
        <Item
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
    </ListStyled>
  );
};

const ListStyled = styled.ul`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
`;

export default List;
