/**
 * Author: Amit raikwar
 * Last updated: 04 Feb, 2024
 */
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Theme, setTheme } from "../../store/slice/theme/ThemeSlice";
import { RootState } from "../../store/Store";
import NavigationToggleButton from "./NavigationToggleButton";
import {
  ProfilePlaceholder,
  ProfileIcon,
  PasswordResetIcon,
  SettingsIcon,
  LogoutIcon,
} from "assets";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Navigation component props.
 */
interface INavigationComponentProps {
  logOutClickHandler: () => void;
  openSidebarClickHandler: () => void;
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Navigation component.
 *
 * @param props  The navigation component props.
 * @returns The navigation component.
 */
function NavigationComponent(props: INavigationComponentProps) {
  const dispatch = useDispatch();
  const themeState = useSelector((state: RootState) => state.theme);
  const profileState = useSelector((state: RootState) => state.profile);
  const [themeCheckState, setThemeCheckState] = useState(
    themeState.theme === Theme.DARK ? true : false
  );

  useEffect(() => {
    if (themeCheckState) {
      dispatch(setTheme({ theme: Theme.DARK }));
    } else {
      dispatch(setTheme({ theme: Theme.LIGHT }));
    }
  }, [dispatch, themeCheckState]);

  return (
    <div className="navbar bg-base-300 h-[9%]">
      <div className="flex-none">
        <button
          className="btn btn-square btn-ghost"
          onClick={props.openSidebarClickHandler}
        >
          <NavigationToggleButton
            openSidebarClickHandler={props.openSidebarClickHandler}
          />
        </button>
      </div>
      <div className="flex-1">
        <NavLink className="btn btn-ghost text-xl" to={""}>
          <img
            src={require("../../assets/images/logo-no-bg.png")}
            className=" w-36 inline-block"
            alt="Dashwave-logo"
          />
        </NavLink>
      </div>
      <div className="flex-none">
        <div className="px-2">
          <input
            checked={themeCheckState}
            type="checkbox"
            value="night"
            onChange={(e: any) => {
              setThemeCheckState((prev) => !prev);
            }}
            className=" toggle theme-controller bg-amber-300 border-sky-400 [--tglbg:theme(colors.sky.500)] checked:bg-blue-300 checked:border-blue-800 checked:[--tglbg:theme(colors.blue.900)] row-start-1 col-start-1 col-span-2"
          />
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              {profileState.profile === "" ? (
                <ProfilePlaceholder />
              ) : (
                <img
                  alt="Tailwind CSS Navbar component"
                  src={profileState.profile}
                />
              )}
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-md dropdown-content bg-base-300 rounded-box w-52 drop-shadow-2xl"
          >
            <li className="menu-title">
              <span>
                Hi, {profileState.firstName} {profileState.lastName}
              </span>
            </li>
            <li className="m-1">
              <NavLink className="justify-between" to={"/profile/preview"}>
                <div className="flex flex-row gap-2 items-center">
                  <ProfileIcon />
                  Profile
                </div>
                <span className="badge">New</span>
              </NavLink>
            </li>
            <li className="m-1">
              <NavLink to={"/profile/reset"}>
                <PasswordResetIcon />
                Password reset
              </NavLink>
            </li>
            <li className="m-1">
              <NavLink to={"/profile/settings"}>
                <SettingsIcon />
                Settings
              </NavLink>
            </li>
            <li className="m-1">
              <button
                onClick={props.logOutClickHandler}
                className=" bg-error text-error-content"
              >
                <LogoutIcon />
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Export the NavigationComponent component.
export default NavigationComponent;
export type { INavigationComponentProps };

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// End of file.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
