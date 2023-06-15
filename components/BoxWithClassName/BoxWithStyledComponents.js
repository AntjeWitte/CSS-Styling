import styled, { css } from "styled-components";

export default function BoxWithStyledComponent({ isBlack }) {
  return <StyledBox black={isBlack}>Boxibox</StyledBox>;
}

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: var(--primary-background);
  color: var(--primary-color);
  margin: 2rem;
  ${({ black }) =>
    black &&
    css`
      background-color: var(--secondary-background);
      color: var(--secondary-color);
    `};
  &:hover {
    background-color: var(--hover-background);
  }
`;
