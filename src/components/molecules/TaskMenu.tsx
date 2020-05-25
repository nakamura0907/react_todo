import * as React from "react";
import styled from "styled-components";
import { Field } from "redux-form";

import Button from "@atom/Button";
import ButtonIcon from "@atom/ButtonIcon";
import Input from "@atom/Input";

const TaskMenu = ({
  favorite,
  memo,
  priority,
  handleClickCancel,
  handleClickUpdate,
  handleChangeFavorite,
  handleChangeMemo,
  handleChangePriority,
}) => {
  return (
    <Task>
      <Heading>TASK</Heading>
      <div style={{ display: "flex" }}>
        <Field name="todoListForm" type="text" component={Input} />
        <Button color="blue" background="#eff3f6" text="Cancel" onClick={handleClickCancel} />
        <ButtonIcon color="white" background="blue" iconClass="far fa-edit" onClick={handleClickUpdate} />
      </div>
      <div>
        <div>
          <label htmlFor="favorite">お気に入り: </label>
          <input type="checkbox" id="favorite" checked={favorite} onChange={handleChangeFavorite} />
        </div>
        <div>
          <label htmlFor="priority">優先度: </label>
          <select name="priority" id="priority" value={priority} onChange={handleChangePriority}>
            <option value="black">0</option>
            <option value="blue">1</option>
            <option value="orange">2</option>
            <option value="red">3</option>
          </select>
        </div>
      </div>
      {/* form-end */}
      <div>
        <label htmlFor="memo">Memo</label>
        <textarea
          name="memo"
          id="memo"
          cols={30}
          rows={10}
          style={{ width: "100%" }}
          value={memo}
          onChange={handleChangeMemo}
        ></textarea>
      </div>
    </Task>
  );
};

const Task = styled.div`
  background: white;
  box-shadow: 0 8px 7px rgba(0, 0, 0, 0.6);
  height: 80vh;
  left: 50%;
  padding: 15px;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
  z-index: 10;

  & > div {
    margin-top: 30px;
  }
`;

const Heading = styled.h1`
  color: #1890ff;
  font-family: "YuMincho", "Yu Mincho", serif;
`;

export default TaskMenu;
