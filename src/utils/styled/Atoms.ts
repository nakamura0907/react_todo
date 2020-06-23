import styled from "styled-components";

export const Button = styled.button`
    background: ${(props): string => props.background};
    color: ${(props): string => props.color};
    border: 0;
    border-radius: 0.25rem;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14);
    box-sizing: border-box;
    padding: 11px;
    width: 65px;
    &:hover {
    box-shadow: 0 8px 7px 0 rgba(0, 0, 0, 0.11);
    }
`;