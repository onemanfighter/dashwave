import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/AuthSlice";
import themeReducer from "./slice/ThemeSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
