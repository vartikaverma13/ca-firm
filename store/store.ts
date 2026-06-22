import { configureStore } from "@reduxjs/toolkit";
import consultationReducer from "./consultationSlice";

export const store = configureStore({
  reducer: {
    consultation: consultationReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
