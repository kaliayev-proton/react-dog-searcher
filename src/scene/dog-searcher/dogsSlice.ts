import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DogsState {
  lineage: string;
}

const initialState: DogsState = {
  lineage: "",
};

export const dogsSlice = createSlice({
  name: "dogs",
  initialState,
  reducers: {
    setDogLineage: (state, action: PayloadAction<string>) => {
      state.lineage = action.payload;
    },
  },
});

export const { setDogLineage } = dogsSlice.actions;

export default dogsSlice.reducer;
