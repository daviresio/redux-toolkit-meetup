import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import rootReducer, { RootState } from "./reducers";

const store = configureStore({
  reducer: rootReducer,
});

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
