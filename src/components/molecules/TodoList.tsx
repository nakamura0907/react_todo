import * as React from "react";

import List from "../atoms/List";

interface TodoItem {
  id: string;
  value: string;
}

interface Props {
  todos: TodoItem[];
  onClickFunction: (index: number) => void;
}

const TodoList: React.FC<Props> = (props) => {
  return (
    <ul className="list l-flex">
      {props.todos.map((todo, index) => (
        <List onClickFunction={props.onClickFunction} key={todo.id} todo={todo.value} index={index} />
      ))}
    </ul>
  );
};

export default TodoList;
