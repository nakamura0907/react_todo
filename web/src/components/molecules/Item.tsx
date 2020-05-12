import * as React from "react";
import { Field } from "redux-form";
import classNames from "classnames";
import styled from "styled-components";

import Button from "../atoms/Button";
import ButtonIcon from "../atoms/ButtonIcon";
import Input from "../atoms/Input";

interface Todo {
  id: string;
  isCompleted: boolean;
  isForm: boolean;
  value: string;
}

interface Props {
  chancelUpdateFunction: Function;
  changeTextformFunction: Function;
  completedTodoFunction: Function;
  index: number;
  initialize: Function;
  removeTodoFunction: Function;
  reset: Function;
  todo: Todo;
  todoListForm: any;
  updateTodoFunction: Function;
}

const Item: React.FC<Props> = ({
  chancelUpdateFunction,
  changeTextformFunction,
  completedTodoFunction,
  index,
  initialize,
  removeTodoFunction,
  reset,
  todo,
  todoListForm,
  updateTodoFunction,
}) => {
  const iconClass = classNames("far", {
    "fa-square": !todo.isCompleted,
    "fa-check-square": todo.isCompleted,
  });
  const handleClickChancel = (): void => {
    chancelUpdateFunction();
    reset();
  };
  const handleClickChangeTextform = (): void => {
    initialize({ todoListForm: todo.value });
    changeTextformFunction(todo.id);
  };
  const handleClickRemove = (): void => {
    if (window.confirm("「" + todo.value + "」 を削除しますか?")) {
      removeTodoFunction(index);
    }
  };
  const handleClickCompleted = (): void => {
    completedTodoFunction(todo.id);
  };
  const handleClickUpdate = (): void => {
    if (todoListForm.values.todoListForm) {
      updateTodoFunction(todo.id, todoListForm.values.todoListForm);
      reset();
    }
  };
  if (!todo.isForm) {
    return (
      <ListItem className={classNames({ "is-completed": todo.isCompleted })}>
        <Icon onClick={handleClickCompleted} className={iconClass} />
        <ListText onClick={handleClickChangeTextform}>{todo.value}</ListText>
        <ButtonIcon color="white" background="red" iconClass="far fa-trash-alt" onClickFunction={handleClickRemove} />
      </ListItem>
    );
  } else {
    return (
      <ListItem className={classNames({ "is-completed": todo.isCompleted })}>
        <Icon onClick={handleClickCompleted} className={iconClass} />
        <Field name="todoListForm" type="text" component={Input} />
        <Button color="red" background="#eff3f6" text="Cancel" onClickFunction={handleClickChancel} />
        <ButtonIcon color="black" background="#eff3f6" iconClass="far fa-edit" onClickFunction={handleClickUpdate} />
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
