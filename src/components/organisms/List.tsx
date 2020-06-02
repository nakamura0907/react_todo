import * as React from "react";
import styled from "styled-components";

import TodoItem from "@component/molecules/TodoItem";

interface TodosObject {
  deadline: number;
  favorite: boolean;
  id: string;
  isCompleted: boolean;
  isTask: boolean;
  memo: string;
  priority: string;
  value: string;
}

interface Props {
  cancelUpdate: Function;
  changeTextform: Function;
  completeTodo: Function;
  initialize: Function;
  removeTodo: Function;
  reset: Function;
  todos: TodosObject[];
  todoListForm: any;
  updateTodo: Function;
}

const List: React.FC<Props> = ({
  cancelUpdate,
  changeTextform,
  completeTodo,
  initialize,
  removeTodo,
  reset,
  todoListForm,
  todos,
  updateTodo,
}) => {
  const [date, setDate] = React.useState(new Date());
  const [sort, setSort] = React.useState("default");
  const [sortResult, setSortResult] = React.useState(todos);
  React.useEffect(() => {
    const result = todos;
    switch (sort) {
      case "default":
        break;
      case "complete":
        result.sort((a) => {
          if (a.isCompleted === true) {
            return 1;
          } else {
            return -1;
          }
        });
        break;
      case "priority":
        // result.sort((a) => {});
        break;
      case "favorite":
        result.sort((a) => {
          if (a.favorite === true) {
            return 1;
          } else {
            return -1;
          }
        });
        break;
      case "date":
        result.sort((a, b) => b.deadline - a.deadline);
        break;
    }
    console.log(result);
    setSortResult(result);
  });
  return (
    <>
      <div style={{ marginTop: "30px" }}>
        <label htmlFor="sort">並び順(未実装): </label>
        <select name="sort" id="sort" defaultValue="default" onChange={(e) => setSort(e.target.value)}>
          <option value="default">デフォルト</option>
          <option value="complete">達成済み</option>
          <option value="priority">優先度順</option>
          <option value="favorite">お気に入り</option>
          <option value="date">期限</option>
        </select>
      </div>
      <ListStyled>
        {sortResult.map((todo, index) => (
          <TodoItem
            date={date}
            setDate={setDate}
            cancelUpdate={cancelUpdate}
            changeTextform={changeTextform}
            completeTodo={completeTodo}
            index={index}
            initialize={initialize}
            key={index}
            removeTodo={removeTodo}
            reset={reset}
            todo={todo}
            todoListForm={todoListForm}
            updateTodo={updateTodo}
          />
        ))}
      </ListStyled>
    </>
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
