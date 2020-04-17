import * as React from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

import Btn from "../atoms/Btn";
import Form from "../atoms/Form";
import TodoList from "../molecules/TodoList";

interface TodoItem {
  id: string;
  value: string;
}

interface State {
  count: number;
  todos: TodoItem[];
  value: string;
}

const TodoDivStyled = styled.div`
  box-sizing: border-box;
  padding: 0 24px;
`;

export default class Todo extends React.Component<{}, State> {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      todos: [],
      // todos: {},
      value: "",
    };
  }

  addTodo = (): void => {
    const { todos, value } = this.state;
    if (value) {
      console.log(todos);
      const id = String(uuidv4());
      this.setState({
        todos: [...todos, { id: uuidv4(), value }],
        // todos: {...todos, id: {value}}
        value: "",
      });
    }
  };

  changeValue = (e): void => {
    this.setState({
      value: e.target.value,
    });
  };

  removeTodo = (index): void => {
    const { todos } = this.state;
    this.setState({
      todos: [...todos.slice(0, index), ...todos.slice(index + 1)],
    });
  };

  render(): object {
    return (
      <>
        <TodoDivStyled className="l-flex form">
          <Form onChangeFunction={this.changeValue} value={this.state.value} />
          <Btn text="ADD!" onClickFunction={this.addTodo} />
        </TodoDivStyled>
        <TodoList todos={this.state.todos} onClickFunction={this.removeTodo} />
      </>
    );
  }
}
