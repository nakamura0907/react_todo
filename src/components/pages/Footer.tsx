import * as React from "react";
import styled from "styled-components";

const Footer: React.FC = () => {
  return (
    <FooterStyled>
      <small>
        &copy;ToDoリスト <time>2020-04-01</time>
      </small>
    </FooterStyled>
  );
};

export default Footer;

const FooterStyled = styled.footer`
  margin-top: auto;
  padding-top: 20px;
`;
