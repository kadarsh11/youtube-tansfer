import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as UserThunk from "./user.thunk";
interface BuyState {
  stateValue: string;
  results: any[]; // for example only
}

const userInitialState: BuyState = {
  stateValue: "",
  results: [], //for example only
};

const UserSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    setStateVal: (state, action: PayloadAction<string>) => {
      state.stateValue = action.payload;
    },
  },
  extraReducers: {
    [`${UserThunk.fetchData?.fulfilled}`]: (
      state,
      { payload }: { payload: any[] }
    ) => {
      state.results = payload;
      return state;
    },
  },
});

export { UserSlice, UserThunk };
