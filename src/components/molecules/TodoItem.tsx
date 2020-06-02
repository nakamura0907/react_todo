import * as React from "react";
import classNames from "classnames";
import styled from "styled-components";

import ButtonIcon from "@atom/ButtonIcon";
import TaskMenu from "@component/molecules/TaskMenu";

interface Todo {
  deadline: number;
  favorite: boolean;
  id: string;
  isCompleted: boolean;
  isTask: boolean;
  memo: string;
  priority: number;
  value: string;
}

interface Props {
  date: Date;
  setDate: Function;
  cancelUpdate: Function;
  changeTask: Function;
  completeTodo: Function;
  index: number;
  initialize: Function;
  removeTodo: Function;
  reset: Function;
  todo: Todo;
  todoListForm: any;
  updateTodo: Function;
}

const TodoItem: React.FC<Props> = ({
  date,
  setDate,
  cancelUpdate,
  changeTask,
  completeTodo,
  index,
  initialize,
  removeTodo,
  reset,
  todo,
  todoListForm,
  updateTodo,
}) => {
  const [favorite, setFavorite] = React.useState(todo.favorite);
  const [priority, setPriority] = React.useState(todo.priority);
  const [memo, setMemo] = React.useState(todo.memo);
  const iconClass = classNames("far", {
    "fa-square": !todo.isCompleted,
    "fa-check-square": todo.isCompleted,
  });
  const handleClickchangeTask = (): void => {
    initialize({ todoListForm: todo.value });
    changeTask(todo.id);
  };
  const handleClickRemove = (): void => {
    if (window.confirm("「" + todo.value + "」 を削除しますか?")) {
      removeTodo(index);
    }
  };
  const handleClickComplete = (): void => {
    completeTodo(todo.id);
  };
  const handleClickCancel = (): void => {
    cancelUpdate();
    reset();
    setFavorite(todo.favorite);
    setPriority(todo.priority);
    setMemo(todo.memo);
    setDate(new Date());
  };
  const handleClickUpdate = (): void => {
    const deadline = (date.getTime() - new Date().getTime()) / 86400000 + 1;
    if (todoListForm.values.todoListForm && deadline >= 0) {
      const form = { favorite: favorite, priority: priority, deadline: deadline, memo: memo };
      updateTodo(todo.id, todoListForm.values.todoListForm, form);
      reset();
    }
  };
  return (
    <>
      <ListItem className={classNames({ "is-completed": todo.isCompleted })}>
        <Icon onClick={handleClickComplete} className={iconClass} color={todo.priority} />
        <TextWrap onClick={handleClickchangeTask}>
          <ListText>{todo.value}</ListText>
          {todo.favorite ? (
            <span>
              <HeartIcon className="fas fa-heart"></HeartIcon>
            </span>
          ) : (
            <></>
          )}
          <Deadline>残り{Math.floor(todo.deadline)}日</Deadline>
        </TextWrap>
        <ButtonIcon color="white" background="red" iconClass="far fa-trash-alt" onClick={handleClickRemove} />
      </ListItem>
      {todo.isTask ? (
        <TaskMenu
          date={date}
          priority={priority}
          favorite={favorite}
          memo={memo}
          handleChangeFavorite={(): void => setFavorite(!favorite)}
          handleChangeMemo={(e): void => setMemo(e.target.value)}
          handleChangePriority={(e): void => setPriority(parseInt(e.target.value))}
          handleChangeDate={(date): void => setDate(date)}
          handleClickCancel={handleClickCancel}
          handleClickUpdate={handleClickUpdate}
        />
      ) : (
        ""
      )}
    </>
  );
};

const Icon = styled.i`
  color: ${(props) => {
    if (props.color === 0) {
      return "black";
    } else if (props.color === 1) {
      return "blue";
    } else if (props.color === 2) {
      return "orange";
    } else {
      return "red";
    }
  }};
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

const TextWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Deadline = styled.span`
  width: 100%;
`;

const HeartIcon = styled.i`
  margin-right: 15px;
  color: pink;
  font-size: 25px;
`;

export default TodoItem;
