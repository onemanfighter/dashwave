import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  getThemeData,
  setThemeData,
} from "../../service/local_storage/theme/ThemeStorageApi";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

export interface ThemeState {
  theme: Theme;
}

const initialTheme: ThemeState = {
  theme: getThemeData() === Theme.DARK ? Theme.DARK : Theme.LIGHT,
};

const THEME = "theme";

export const themeSlice = createSlice({
  name: THEME,
  initialState: initialTheme,
  reducers: {
    setTheme: (_state, action: PayloadAction<ThemeState>) => {
      setThemeData(action.payload.theme);
      return action.payload;
    },
    getTheme: (_state, action: PayloadAction<ThemeState>) => {
      return action.payload;
    },
  },
});

export const { setTheme, getTheme } = themeSlice.actions;

export default themeSlice.reducer;
