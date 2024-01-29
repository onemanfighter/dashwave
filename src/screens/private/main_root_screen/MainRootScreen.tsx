import { Outlet } from "react-router-dom";
import NavigationComponent from "../../../components/navigation/Navigation";
import { batch, useDispatch, useSelector } from "react-redux";
import { onSignOut } from "../../../data_store/slice/AuthSlice";
import { signOut } from "../../../service/supabase/supa_auth/AuthApi";
import SidebarComponent from "../../../components/sidebar/SidebarComponent";
import { useEffect, useState } from "react";
import {
  removeProfile,
  setProfile,
} from "../../../data_store/slice/ProfileSlice";
import { userProfileDataRead } from "../../../service/supabase/supastore/user_profile/UserProfileStoreApi";
import { UserProfData } from "../../../service/supabase/supastore/user_profile/UserCollection";
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
  const userAuthState = useSelector((state: RootState) => state.auth);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userAuthState.authToken !== "") {
      userProfileDataRead(userAuthState.userData, (user: UserProfData) => {
        dispatch(setProfile(user));
      });
    }
  }, [dispatch, userAuthState]);

  const signOutHandler = () => {
    batch(() => {
      dispatch(onSignOut());
      dispatch(removeProfile());
    });
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
      <div className=" flex flex-wrap h-[92%] w-full">
        <div
          className={`${
            sidebarOpen ? "w-1/6" : "w-[5%]"
          } h-full border-r border-primary bg-base-200`}
        >
          <SidebarComponent sideBarOpen={sidebarOpen} />
        </div>
        <div
          className={`${
            sidebarOpen ? "w-5/6" : "w-[95%]"
          } h-full p-4 drop-shadow-lg`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}
