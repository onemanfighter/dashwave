import { AppStoreState } from 'zustand_store/store';

export const themeSelector = (state: AppStoreState) => ({
    themeValue: state.Theme.themeValue,
    setTheme: state.Theme.setTheme,
});
