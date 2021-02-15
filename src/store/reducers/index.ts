import { combineReducers } from "@reduxjs/toolkit";
import words from "./wordsReducer";

const rootReducer = combineReducers({
  words,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
