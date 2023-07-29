import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  total: 0,
  count: 0,
};

export const pcBuilderSlice = createSlice({
  name: "pcBuilder",
  initialState,
  reducers: {
    addtoPCBuilder: (state, action) => {
      state.products.push({ ...action.payload });
      state.total += action.payload.price
      state.count += 1;
    },
  },
});

export const { addtoPCBuilder } = pcBuilderSlice.actions;

export default pcBuilderSlice.reducer;
