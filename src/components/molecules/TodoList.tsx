import * as React from "react";

const TodoList = ({ todos }) => {
  console.log(todos); // ADDでundefinedになる
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <p>{todo}</p>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
