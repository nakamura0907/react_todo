import * as React from "react";
import { Field } from "redux-form";
import classNames from "classnames";
import styled from "styled-components";

import Button from "@atom/Button";
import ButtonIcon from "@atom/ButtonIcon";
import Input from "@atom/Input";

interface Todo {
  id: string;
  isCompleted: boolean;
  isForm: boolean;
  value: string;
}

interface Props {
  index: number;
  initialize: Function;
  removeTodo: Function;
  reset: Function;
  todo: Todo;
  todoListForm: any;
  updateTodo: Function;
}

const Item: React.FC<Props> = ({ index, initialize, removeTodo, reset, todo, todoListForm, updateTodo }) => {
  const [isCompleted, setIsCompleted] = React.useState(false);
  const [isForm, setIsForm] = React.useState(false);
  const iconClass = classNames("far", {
    "fa-square": !isCompleted,
    "fa-check-square": isCompleted,
  });
  const handleClickCancel = (): void => {
    setIsForm(false);
    reset();
  };
  const handleClickChangeTextform = (): void => {
    initialize({ todoListForm: todo.value });
    setIsForm(true);
  };
  const handleClickRemove = (): void => {
    if (window.confirm("「" + todo.value + "」 を削除しますか?")) {
      removeTodo(index);
    }
  };
  const handleClickComplete = (): void => {
    setIsCompleted(!isCompleted);
  };
  const handleClickUpdate = (): void => {
    if (todoListForm.values.todoListForm) {
      updateTodo(todo.id, todoListForm.values.todoListForm);
      setIsForm(false);
      reset();
    }
  };
  console.log(isForm);
  if (!isForm) {
    return (
      <ListItem className={classNames({ "is-completed": isCompleted })}>
        <Icon onClick={handleClickComplete} className={iconClass} />
        <ListText onClick={handleClickChangeTextform}>{todo.value}</ListText>
        <ButtonIcon color="white" background="red" iconClass="far fa-trash-alt" onClick={handleClickRemove} />
      </ListItem>
    );
  } else {
    return (
      <ListItem className={classNames({ "is-completed": isCompleted })}>
        <Icon onClick={handleClickComplete} className={iconClass} />
        <Field name="todoListForm" type="text" component={Input} />
        <Button color="blue" background="#eff3f6" text="Cancel" onClick={handleClickCancel} />
        <ButtonIcon color="white" background="blue" iconClass="far fa-edit" onClick={handleClickUpdate} />
      </ListItem>
    );
  }
};

const Icon = styled.i`
  margin-right: 10px;
  font-size: 36px;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  width: 100%;
`;

const ListText = styled.p`
  -ms-overflow-style: none;
  font-size: 1.2rem;
  font-weight: 300;
  margin-right: 20px;
  overflow: scroll;
  scrollbar-width: none;
  text-align: left;
  white-space: nowrap;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default Item;
