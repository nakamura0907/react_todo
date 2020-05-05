import * as React from "react";
import styled from "styled-components";

interface Props {
  background: string;
  color: string;
  onClickFunction: Function;
  text: string;
}

const Btn: React.FC<Props> = ({ background, color, onClickFunction, text }) => {
  return (
    <BtnStyled color={color} background={background} onClick={onClickFunction}>
      {text}
    </BtnStyled>
  );
};

export default Btn;

const BtnStyled = styled.button`
  background: ${(props): string => props.background};
  color: ${(props): string => props.color};
  border: 0;
  border-radius: 0.25rem;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14);
  box-sizing: border-box;
  padding: 11px;
  &:hover {
    box-shadow: 0 8px 7px 0 rgba(0, 0, 0, 0.11);
  }
`;
