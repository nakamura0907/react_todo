import * as React from "react";
import styled from "styled-components";

const Footer: React.FC = () => {
  return (
    <FooterStyled>
      <FooterSmallStyled>
        &copy;ToDoList <time>2020/04/01</time>
      </FooterSmallStyled>
    </FooterStyled>
  );
};

export default Footer;

const FooterStyled = styled.footer`
  margin-top: auto;
  padding-top: 50px;
`;

const FooterSmallStyled = styled.small`
  font-size: 1.3rem;
  font-family: "Amatic SC", cursive;
`;
