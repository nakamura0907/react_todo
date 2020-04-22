import * as React from "react";
import styled from "styled-components";

interface Props {
  text: string;
  onClickFunction: Function;
  background: string;
  color: string;
}

const Btn: React.FC<Props> = (props) => {
  return (
    <BtnStyled onClick={props.onClickFunction} background={props.background} color={props.color}>
      {props.text}
    </BtnStyled>
  );
};

export default Btn;

const BtnStyled = styled.button`
  background: ${(props): void => props.background};
  color: ${(props): void => props.color};
  border: 0;
  border-radius: 0.25rem;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14);
  box-sizing: border-box;
  padding: 11px;
  &:hover {
    box-shadow: 0 8px 7px 0 rgba(0, 0, 0, 0.11);
  }
`;
