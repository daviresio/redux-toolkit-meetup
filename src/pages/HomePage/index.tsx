import React, { useEffect } from "react";
import randomWords from "random-words";
import Input from "../../components/Input";
import ListItem from "../../components/ListItem";
import * as S from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/reducers";
import {
  changeInputValue,
  requestCreateWord,
  requestDeleteWord,
  requestListAllWords,
  requestUpdateWord,
} from "store/reducers/wordsReducer";

const HomePage: React.FC = () => {
  const { inputValue, words } = useSelector((state: RootState) => state.words);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestListAllWords());
  }, []);

  const handleChangeInputValue = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeInputValue(evt.target.value));
  };

  const handleCreate = async () => {
    if (inputValue.trim() === "") return;
    dispatch(requestCreateWord(inputValue));
  };

  const handleChange = async (id: number, index: number) => {
    dispatch(requestUpdateWord({ id, name: randomWords() }, index));
  };

  const handleDelete = (id: number) => {
    dispatch(requestDeleteWord(id));
  };

  return (
    <S.HomePage>
      <Input
        value={inputValue}
        onChange={handleChangeInputValue}
        onEnterPress={handleCreate}
      />
      <S.ListContainer>
        {words.map((word, index) => (
          <ListItem
            title={word.name}
            key={word.id}
            handleChange={() => handleChange(word.id, index)}
            handleDelete={() => handleDelete(word.id)}
          />
        ))}
      </S.ListContainer>
    </S.HomePage>
  );
};

export default HomePage;
