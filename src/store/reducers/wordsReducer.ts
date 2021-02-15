import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import WordModel from "models/word.model";
import * as wordService from "services/word";
import { AppThunk } from "store";

interface UpdateWordPayload {
  name: string;
  index: number;
}

interface WordsState {
  inputValue: string;
  words: WordModel[];
  isLoading: boolean;
}

const initialState: WordsState = {
  inputValue: "",
  words: [],
  isLoading: false,
};

const wordsSlice = createSlice({
  name: "word",
  initialState,
  reducers: {
    changeInputValue(state, action: PayloadAction<string>) {
      state.inputValue = action.payload;
    },
    requestBegin(state) {
      state.isLoading = true;
    },
    listAllWordsSuccess(state, action: PayloadAction<WordModel[]>) {
      state.words = action.payload;
      state.isLoading = false;
    },
    createWordSuccess(state, action: PayloadAction<WordModel>) {
      state.words.unshift(action.payload);
      state.inputValue = "";
      state.isLoading = false;
    },
    updateWordSuccess(state, action: PayloadAction<UpdateWordPayload>) {
      state.words[action.payload.index].name = action.payload.name;
      state.isLoading = false;
    },
    deleteWordSuccess(state, action: PayloadAction<number>) {
      state.words = state.words.filter((word) => word.id !== action.payload);
      state.isLoading = false;
    },
  },
});

const {
  requestBegin,
  listAllWordsSuccess,
  createWordSuccess,
  updateWordSuccess,
  deleteWordSuccess,
} = wordsSlice.actions;
export const { changeInputValue } = wordsSlice.actions;

export default wordsSlice.reducer;

export const requestListAllWords = (): AppThunk => async (dispatch) => {
  dispatch(requestBegin());
  const words = await wordService.getAllWords();
  dispatch(listAllWordsSuccess(words));
};

export const requestCreateWord = (wordName: string): AppThunk => async (
  dispatch
) => {
  dispatch(requestBegin());
  const word = await wordService.createWord(wordName);
  dispatch(createWordSuccess(word));
};

export const requestUpdateWord = (
  word: WordModel,
  index: number
): AppThunk => async (dispatch) => {
  dispatch(requestBegin());
  await wordService.updateWord(word);
  dispatch(updateWordSuccess({ name: word.name, index }));
};

export const requestDeleteWord = (id: number): AppThunk => async (dispatch) => {
  dispatch(requestBegin());
  await wordService.deleteWord(id);
  dispatch(deleteWordSuccess(id));
};
