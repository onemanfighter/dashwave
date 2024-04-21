import { useDispatch } from 'react-redux';
import { Theme, themeSlice } from 'store/slice';
import { RootState } from 'store/store_state';

export const ThemeSelector = (state: RootState) => {
    const dispatch = useDispatch();
    const { setTheme } = themeSlice.actions;

    const setThemeAction = (theme: Theme) => {
        dispatch(setTheme({ theme }));
    };

    return { theme: state.theme.theme, setThemeAction };
};
