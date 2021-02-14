import React from "react";
import IconButton from "components/IconButton";
import { faRetweet, faTrash } from "@fortawesome/free-solid-svg-icons";
import * as S from "./styled";

interface ComponentProps {
  title: string;
  handleDelete: () => void;
  handleChange: () => void;
}

const ListItem: React.FC<ComponentProps> = ({
  title,
  handleDelete,
  handleChange,
}) => {
  return (
    <S.ListItem>
      <S.Title>{title}</S.Title>
      <S.Actions>
        <IconButton color="#43aa65" icon={faRetweet} onClick={handleChange} />
        <IconButton color="#d65050" icon={faTrash} onClick={handleDelete} />
      </S.Actions>
    </S.ListItem>
  );
};

export default ListItem;
