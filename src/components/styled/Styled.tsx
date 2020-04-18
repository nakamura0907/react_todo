import styled from "styled-components";

export const BtnStyled = styled.button`
  border: 0;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14);
  box-sizing: border-box;
  padding: 11px;
  &:hover {
    box-shadow: 0 8px 7px 0 rgba(0, 0, 0, 0.11);
  }
`;

export const FormStyled = styled.input`
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14);
  box-sizing: border-box;
  height: 36px;
  width: 100%;
  &:focus {
    box-shadow: 0 8px 7px 0 rgba(17, 148, 246, 0.11);
  }
`;

export const IStyled = styled.i`
  margin-right: 10px;
  font-size: 32px;
`;

export const LFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LFlexList = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ListItemStyled = styled(LFlexList)`
  margin-top: 15px;
  width: 100%;
`;

export const ListPStyled = styled.p`
  width: 100%;
  text-align: left;
  -ms-overflow-style: none;
  overflow: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
