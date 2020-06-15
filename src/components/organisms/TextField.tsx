import * as React from "react";
import { Field } from "redux-form";
import Calendar from "react-calendar";

import InputField from "@component/molecules/InputField";
import * as Validate from "../../utils/Validate";
import { getDate, diff } from "../../utils/dateHelper";

interface Props {
  onClick: Function;
  reset: Function;
  value: any;
}

const TextField: React.FC<Props> = ({ onClick, reset, value }) => {
  const [date, setDate] = React.useState(new Date());
  const [favorite, setFavorite] = React.useState(false);
  const [priority, setPriority] = React.useState(0);
  const handleClick = (): void => {
    const deadline = diff(date);
    if (value.values.todoForm) {
      const form = { favorite: favorite, priority: priority, deadline: deadline };
      onClick(value.values.todoForm, form);
      reset();
      setDate(new Date());
      setPriority(0);
      setFavorite(false);
    }
  };
  return (
    <>
      <Field name="todoForm" type="text" onClick={handleClick} validate={[Validate.required]} component={InputField} />
      <div style={{ marginTop: "15px" }}>
        <label htmlFor="favorite">お気に入り: </label>
        <input type="checkbox" id="favorite" onChange={(): void => setFavorite(!favorite)} checked={favorite} />
      </div>
      <div>
        <label htmlFor="priority">優先度: </label>
        <select
          name="priority"
          id="priority"
          onChange={(e): void => setPriority(parseInt(e.target.value))}
          value={priority}
        >
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
      </div>
      <div>
        <label htmlFor="calendar">期限:{getDate(date)}</label>
        <Calendar
          onChange={(date): void => setDate(date)}
          value={date}
          minDate={new Date()}
          maxDate={new Date(2100, 1, 1)}
        />
      </div>
    </>
  );
};

export default TextField;
