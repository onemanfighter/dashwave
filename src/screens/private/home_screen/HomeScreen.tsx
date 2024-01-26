import { Outlet } from "react-router-dom";
import NavigationComponent from "../../../components/navigation/Navigation";
import { useDispatch } from "react-redux";
import { onSignOut } from "../../../data_store/slice/AuthSlice";
import { signOut } from "../../../service/auth/AuthApi";
import SidebarComponent from "../../../components/sidebar/SidebarComponent";
import { useState } from "react";

/**
 * Proptypes for the home screen component.
 */
export interface IHomeScreenProps {}

/**
 * Component definition for the home screen component.
 * @param props The proptypes for the component.
 * @returns The HomeScreen component.
 */
export default function HomeScreen(props: IHomeScreenProps) {
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
        <Outlet />
      </div>
    </div>
  );
}
