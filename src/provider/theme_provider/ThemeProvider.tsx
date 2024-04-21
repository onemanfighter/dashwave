import { useSelector } from 'react-redux';
import { RootState, Theme } from 'store';
import { ThemeProviderProps } from './types';
import { ThemeSelector } from 'store/selectors/theme_selector';

const ThemeProvider = (props: ThemeProviderProps) => {
    const { theme } = useSelector(ThemeSelector);

    return <div data-theme={theme}>{props.children}</div>;
};

export default ThemeProvider;
