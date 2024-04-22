import { AppStoreSlice } from '@zustand_store';
import { Theme, ThemeState, ThemeStateSlice } from './types';

const THEME = 'theme';

const initialTheme: ThemeState = {
    themeValue: Theme.LIGHT,
};

const createThemeSlice: AppStoreSlice<ThemeStateSlice> = (set) => ({
    ...initialTheme,
    setTheme: (theme: Theme) =>
        set((state) => {
            state.Theme.themeValue = theme;
        }),
});

export default createThemeSlice;
