import { useSelector } from "react-redux";
import { RootState, Theme } from "store";
import { ThemeProviderProps } from "./types";

const ThemeProvider = (props: ThemeProviderProps) => {
  const theme: Theme = useSelector((state: RootState) => state.theme.theme);

  return <div data-theme={theme}>{props.children}</div>;
};

export default ThemeProvider;
