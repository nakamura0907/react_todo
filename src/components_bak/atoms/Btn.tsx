import * as React from "react";
import styled from "styled-components";

interface Props {
  onClickFunction: () => void;
  text: string;
}

const BtnStyled = styled.button`
  border: 0;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14);
  box-sizing: border-box;
  padding: 11px;
  &:hover {
    box-shadow: 0 8px 7px 0 rgba(0, 0, 0, 0.11);
  }
`;

const Btn: React.FC<Props> = (props) => {
  return (
    <BtnStyled onClick={props.onClickFunction} className="btn">
      {props.text}
    </BtnStyled>
  );
};

export default Btn;