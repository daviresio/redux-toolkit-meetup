import styled from "styled-components";

export interface IconButtonProps {
  color: string;
}

export const IconButton = styled.div<IconButtonProps>`
  display: inline-block;
  padding: 6px;
  background-color: ${({ color }) => color};
  border-radius: 2px;
  cursor: pointer;
  user-select: none;
`;
