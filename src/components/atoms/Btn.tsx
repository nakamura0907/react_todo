import * as React from "react";

interface Props {
  onClickFunction: () => void;
  text: string;
}

const Btn = (props: Props) => {
  return (
    <button onClick={props.onClickFunction} className="btn">
      {props.text}
    </button>
  );
};

export default Btn;
