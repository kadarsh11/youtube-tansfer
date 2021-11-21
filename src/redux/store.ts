import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { UserSlice } from "./user";

import { logger } from "redux-logger";

export const reducer = combineReducers({
  buy: UserSlice.reducer,
});

const store = configureStore({
  reducer,
  middleware: [logger],
});

export type RootState = ReturnType<typeof reducer>;

export default store;
