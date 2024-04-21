import { appStore } from '@zustand_store';
import { themeSelector, useShallow } from '@selectors';
import { ThemeProviderProps } from './types';

const ThemeProvider = (props: ThemeProviderProps) => {
    const { themeValue } = appStore(useShallow(themeSelector));

    return <div data-theme={themeValue}>{props.children}</div>;
};

export default ThemeProvider;
