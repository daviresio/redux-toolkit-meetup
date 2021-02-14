import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import * as S from "./styled";

interface ComponentProps extends S.IconButtonProps {
  onClick: () => void;
  icon: IconProp;
}

const IconButton: React.FC<ComponentProps> = ({ onClick, icon, color }) => {
  return (
    <S.IconButton color={color} onClick={onClick}>
      <FontAwesomeIcon icon={icon} color="#fff" size="sm" />
    </S.IconButton>
  );
};

export default IconButton;
