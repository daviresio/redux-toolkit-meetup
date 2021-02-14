import WordModel from "models/word.model";
import React, { useEffect, useState } from "react";
import { createWord, getAllWords, updateWord, deleteWord } from "services/word";
import randomWords from "random-words";
import Input from "../../components/Input";
import ListItem from "../../components/ListItem";
import * as S from "./styled";

const HomePage: React.FC = () => {
  const [words, setWords] = useState<WordModel[]>([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    getAllWords().then((data) => {
      setWords(data.sort((a, b) => b.id - a.id));
    });
  }, []);

  const changeInputValue = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value);
  };

  const handleCreate = async () => {
    if (inputValue.trim() === "") return;
    const wordCreated = await createWord(inputValue);
    setWords((prev) => [wordCreated, ...prev]);
    setInputValue("");
  };

  const handleChange = async (id: number, index: number) => {
    const wordUpdated = await updateWord({ id, name: randomWords() });
    setWords((prev) => {
      prev[index].name = wordUpdated.name;
      return [...prev];
    });
  };

  const handleDelete = (id: number) => {
    deleteWord(id);
    setWords((prev) => prev.filter((word) => word.id !== id));
  };

  return (
    <S.HomePage>
      <Input
        value={inputValue}
        onChange={changeInputValue}
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
