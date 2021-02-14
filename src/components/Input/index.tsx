import React from "react";
import * as S from "./styled";

interface ComponentProps {
  value: string;
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  onEnterPress?: () => void;
}

const Input: React.FC<ComponentProps> = ({ value, onChange, onEnterPress }) => {
  const onKeyDown = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (evt.key == "Enter") {
      if (onEnterPress) onEnterPress();
    }
  };

  return <S.Input value={value} onChange={onChange} onKeyDown={onKeyDown} />;
};

export default Input;
