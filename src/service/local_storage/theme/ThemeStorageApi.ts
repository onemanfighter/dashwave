import { Theme } from "../../../data_store/slice/ThemeSlice";
import { themeKey } from "../token_constants/StorageConstant";

export const themeCheck = getThemeData() === "dark" ? true : false;

/**
 * Function to get theme data from local storage.
 * @returns theme data from local storage.
 */
export function getThemeData() {
  return localStorage.getItem(themeKey);
}

/**
 * Function to set theme data in local storage.
 * @param theme theme data to set in local storage.
 */
export function setThemeData(theme: Theme) {
  localStorage.setItem(themeKey, theme);
}
