import { Outlet } from "react-router-dom";
import NavigationComponent from "../../../components/navigation/Navigation";
import { useDispatch, useSelector } from "react-redux";
import { onSignOut } from "../../../data_store/slice/AuthSlice";
import { signOut } from "../../../service/firebase/fireauth/AuthApi";
import SidebarComponent from "../../../components/sidebar/SidebarComponent";
import { useEffect, useState } from "react";
import { setProfile } from "../../../data_store/slice/ProfileSlice";
import { userProfileDataRead } from "../../../service/firebase/firestore/StoreApi";
import { UserProfData } from "../../../service/firebase/firestore/UserCollection";
import { RootState } from "../../../data_store/Store";

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
  const emailState = useSelector(
    (state: RootState) => state.auth.userData.email
  );
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    userProfileDataRead(emailState, (user: UserProfData) => {
      console.log(user);
      dispatch(setProfile(user));
    });
  }, [dispatch, emailState]);

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
      <div className=" flex flex-wrap h-[92%]">
        {sidebarOpen && (
          <div className="w-1/6 h-full border-r border-primary bg-base-200">
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
