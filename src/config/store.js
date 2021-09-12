import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../shared/slices/ui";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
