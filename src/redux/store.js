import { configureStore } from "@reduxjs/toolkit";
import pcBuilderReducer from "./features/pcBuilder/pcBuilderSlice";

export const store = configureStore({
  reducer: {
    pcbuilder: pcBuilderReducer
  },
});
