import { IconButton } from "components/IconButton/styled";
import styled from "styled-components";

export const ListItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #eaeaea;
  border-collapse: collapse;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.span``;

export const Actions = styled.div`
  ${IconButton}:first-child {
    margin-right: 10px;
  }
`;
