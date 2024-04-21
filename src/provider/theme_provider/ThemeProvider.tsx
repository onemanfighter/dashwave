import { ThemeProviderProps } from './types';
import { appStore, themeSelector, useShallow } from 'zustand_store';

const ThemeProvider = (props: ThemeProviderProps) => {
    const { themeValue } = appStore(useShallow(themeSelector));

    return <div data-theme={themeValue}>{props.children}</div>;
};

export default ThemeProvider;
