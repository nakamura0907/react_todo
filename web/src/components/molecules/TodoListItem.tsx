import * as React from "react";
import { Field } from "redux-form";
import classNames from "classnames";
import styled from "styled-components";

import BtnIcon from "../atoms/BtnIcon";
import Form from "../atoms/Form";

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
  removeTodoFunction: Function;
  reset: Function;
  todo: Todo;
  todoListForm: any;
  updateTodoFunction: Function;
}

const TodoListItem: React.FC<Props> = ({
  chancelUpdateFunction,
  changeTextformFunction,
  completedTodoFunction,
  index,
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
    reset(); // 更新前に他p要素をクリックすると、値継承をしてしまう対策
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
      <ListItemStyled className={classNames({ "is-completed": todo.isCompleted })}>
        <IStyled onClick={handleClickCompleted} className={iconClass} />
        <ListPStyled onClick={handleClickChangeTextform}>{todo.value}</ListPStyled>
        <BtnIcon color="white" background="red" iconClass="far fa-trash-alt" onClickFunction={handleClickRemove} />
      </ListItemStyled>
    );
  } else {
    return (
      <ListItemStyled className={classNames({ "is-completed": todo.isCompleted })}>
        <IStyled onClick={handleClickCompleted} className={iconClass} />
        <FormStyled name="todoListForm" type="text" component={Form} />
        <BtnIcon
          color="white"
          background="green"
          iconClass="far fa-caret-square-left"
          onClickFunction={handleClickChancel}
        />
        <BtnIcon color="black" background="yellow" iconClass="far fa-edit" onClickFunction={handleClickUpdate} />
      </ListItemStyled>
    );
  }
};

export default TodoListItem;

const FormStyled = styled(Field)`
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14);
  box-sizing: border-box;
  height: 36px;
  width: 100%;
  &:focus {
    box-shadow: 0 8px 7px 0 rgba(17, 148, 246, 0.11);
  }
`;

const IStyled = styled.i`
  margin-right: 10px;
  font-size: 36px;
`;

const ListItemStyled = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  width: 100%;
`;

const ListPStyled = styled.p`
  -ms-overflow-style: none;
  font-size: 1.2rem;
  font-weight: 300;
  margin-right: 20px;
  overflow: scroll;
  scrollbar-width: none;
  text-align: left;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
`;
