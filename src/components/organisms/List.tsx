import * as React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import Item from "@component/molecules/Item";

interface TodosObject {
  id: string;
  isCompleted: boolean;
  isForm: boolean;
  value: string;
}

interface Props {
  initialize: Function;
  removeTodo: Function;
  reset: Function;
  todos: TodosObject[];
  todoListForm: any;
  updateTodo: Function;
}

const List: React.FC<Props> = ({ initialize, removeTodo, reset, todoListForm, todos, updateTodo }) => {
  return (
    <ListStyled>
      {todos.map((todo, index) => (
        <Item
          index={index}
          initialize={initialize}
          key={uuidv4()}
          removeTodo={removeTodo}
          reset={reset}
          todo={todo}
          todoListForm={todoListForm}
          updateTodo={updateTodo}
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
