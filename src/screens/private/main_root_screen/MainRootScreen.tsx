import { Outlet } from 'react-router-dom';
import { batch, useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../../service/supabase/supa_auth/AuthApi';
import { useCallback, useEffect, useState } from 'react';
import { NavigationComponent, SidebarComponent } from 'components';
import {
    RootState,
    onSignOut,
    removeProfile,
    syncForTheFirstTime,
    updateProfile,
} from 'store';

/**
 * Component definition for the main root screen component.
 * @returns The MainRootScreen component.
 */
function MainRootScreen() {
    const userAuthUserIdState = useSelector(
        (state: RootState) => state.auth.userData.userId
    );
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const dispatch = useDispatch();

    const logOutClickHandler = useCallback(() => {
        const signOutHandler = () => {
            batch(() => {
                dispatch(onSignOut());
                dispatch(removeProfile());
            });
        };
        signOut(signOutHandler);
    }, [dispatch]);

    useEffect(() => {
        if (userAuthUserIdState === '') {
            logOutClickHandler();
        } else {
            console.log('syncing for the first time');
            const userData = syncForTheFirstTime((data) =>
                dispatch(updateProfile(data))
            );
            if (userData) dispatch(updateProfile(userData));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userAuthUserIdState]);

    const openSidebarClickHandler = () => {
        setSidebarOpen((prev) => !prev);
    };
    return (
        <div className="flex flex-col h-screen -z-10">
            <div className="z-10">
                <NavigationComponent
                    logOutClickHandler={logOutClickHandler}
                    openSidebarClickHandler={openSidebarClickHandler}
                />
            </div>
            <div className=" flex flex-wrap h-[92%] w-full">
                <div
                    className={`${
                        sidebarOpen ? 'w-1/6' : 'w-[5%]'
                    } h-full border-r border-primary bg-base-200`}
                >
                    <SidebarComponent sideBarOpen={sidebarOpen} />
                </div>
                <div
                    className={`${
                        sidebarOpen ? 'w-5/6' : 'w-[95%]'
                    } h-full p-4 drop-shadow-lg`}
                >
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

// Export the MainRootScreen component.
export default MainRootScreen;
