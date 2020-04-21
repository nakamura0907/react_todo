import * as React from "react";
import styled from "styled-components";

const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <HeaderTitleStyled>TodoList</HeaderTitleStyled>
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.header`
  font-size: 1.8rem;
  margin: 15px 0 20px 0;
`;

const HeaderTitleStyled = styled.h1`
  font-family: "Amatic SC", cursive;
`;
