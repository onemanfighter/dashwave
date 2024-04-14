/**
 * Author: Amit raikwar
 * Last updated: 04 Feb, 2024
 */
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import { useSelector } from "react-redux";
import { Theme } from "../../store/slice/theme/ThemeSlice";
import { RootState } from "../../store/Store";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Interface definition for the theme provider props.
 */
export interface IThemeProviderProps {
  children: React.ReactNode;
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Component definition for the theme provider.
 * @param props The props for the theme provider.
 * @returns The theme provider component.
 */
export default function ThemeProvider(props: IThemeProviderProps) {
  const theme: Theme = useSelector((state: RootState) => state.theme.theme);

  return <div data-theme={theme}>{props.children}</div>;
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// End of file
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
