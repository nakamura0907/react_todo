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
  priority: number;
  value: string;
}

interface Props {
  cancelUpdate: Function;
  changeTask: Function;
  completeTodo: Function;
  initialize: Function;
  removeTodo: Function;
  reset: Function;
  todos: TodosObject[];
  todoListForm: any;
  updateTodo: Function;
}

const sortStrategy = {
  complete: (a) => (a.isCompleted ? 1 : -1),
  date: (a, b) => a.deadline - b.deadline,
  priority: (a, b) => a.priority - b.priority,
  favorite: (a) => (a.favorite ? 1 : -1),
};

const sort = (todos, select) => {
  const result = [...todos];
  if (select == "default") {
    return result;
  }
  result.sort(sortStrategy[select]);
  return result;
};

const List: React.FC<Props> = ({
  cancelUpdate,
  changeTask,
  completeTodo,
  initialize,
  removeTodo,
  reset,
  todoListForm,
  todos,
  updateTodo,
}) => {
  const [date, setDate] = React.useState(new Date());
  const [select, setSelect] = React.useState("default");
  const [sortResult, setSortResult] = React.useState(todos);
  React.useEffect(() => {
    setSortResult(sort(todos, select));
  }, [select, todos]);
  return (
    <>
      <div style={{ marginTop: "30px" }}>
        <label htmlFor="sort">並び順: </label>
        <select name="sort" id="sort" defaultValue="default" onChange={(e) => setSelect(e.target.value)}>
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
            changeTask={changeTask}
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
