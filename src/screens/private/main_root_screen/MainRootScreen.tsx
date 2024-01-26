import { Outlet } from "react-router-dom";
import NavigationComponent from "../../../components/navigation/Navigation";
import { useDispatch } from "react-redux";
import { onSignOut } from "../../../data_store/slice/AuthSlice";
import { signOut } from "../../../service/auth/AuthApi";
import SidebarComponent from "../../../components/sidebar/SidebarComponent";
import { useState } from "react";

/**
 * Proptypes for the main root screen component.
 */
export interface IMainRootScreenProps {}

/**
 * Component definition for the main root screen component.
 * @param props The proptypes for the component.
 * @returns The MainRootScreen component.
 */
export default function MainRootScreen(props: IMainRootScreenProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const dispatch = useDispatch();
  const signOutHandler = () => {
    dispatch(onSignOut());
  };

  const logOutClickHandler = () => {
    signOut(signOutHandler);
  };

  const openSidebarClickHandler = () => {
    setSidebarOpen((prev) => !prev);
  };
  return (
    <div className="flex flex-col h-screen">
      <div className="z-50">
        <NavigationComponent
          logOutClickHandler={logOutClickHandler}
          openSidebarClickHandler={openSidebarClickHandler}
        />
      </div>
      <div className=" flex flex-wrap h-screen">
        {sidebarOpen && (
          <div className="w-1/6 h-full outline bg-base-200">
            <SidebarComponent />
          </div>
        )}
        <div
          className={`${
            sidebarOpen ? "w-5/6" : "w-full"
          } h-full p-4 drop-shadow-lg`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}
