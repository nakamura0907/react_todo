import * as React from "react";

import styled from "styled-components";

interface Props {
  text: string;
}

const Header: React.FC<Props> = ({ text }) => {
  return (
    <>
      <HeaderStyled>
        <HeaderTitleStyled>{text}</HeaderTitleStyled>
      </HeaderStyled>
    </>
  );
};

export default Header;

const HeaderStyled = styled.header`
  font-size: 1.8rem;
  margin: 15px 0 50px 0;
`;

const HeaderTitleStyled = styled.h1`
  font-family: "Amatic SC", cursive;
`;
