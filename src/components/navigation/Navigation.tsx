import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Theme, setTheme } from "../../data_store/slice/ThemeSlice";
import { RootState } from "../../data_store/Store";

export interface INavigationComponentProps {
  logOutClickHandler: () => void;
  openSidebarClickHandler: () => void;
}

export default function NavigationComponent(props: INavigationComponentProps) {
  const dispatch = useDispatch();
  const themeState = useSelector((state: RootState) => state.theme);
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
    <div className="navbar bg-base-300 sticky">
      <div className="flex-none">
        <button
          className="btn btn-square btn-ghost"
          onClick={props.openSidebarClickHandler}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div className="flex-1">
        <NavLink className="btn btn-ghost text-xl" to={""}>
          <img
            src={require("../../assets/images/logo-no-bg.png")}
            className=" w-36 inline-block"
            alt="dashwind-logo"
          />
        </NavLink>
      </div>
      <div className="flex-none">
        <div className="px-2">
          <input
            checked={themeCheckState}
            type="checkbox"
            value="night"
            onClick={() => {
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
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-md dropdown-content bg-base-300 rounded-box w-52 drop-shadow-2xl"
          >
            <li>
              <NavLink className="justify-between" to={""}>
                Profile
                <span className="badge">New</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={""}>Settings</NavLink>
            </li>
            <li>
              <button
                onClick={props.logOutClickHandler}
                className=" bg-error text-error-content"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
