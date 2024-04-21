import { Outlet } from 'react-router-dom';
import { batch, useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../../service/supabase/supa_auth/AuthApi';
import { useCallback, useEffect, useState } from 'react';
import { NavigationComponent, SidebarComponent } from 'components';
import { removeProfile, syncForTheFirstTime, updateProfile } from 'store';
import { AuthSelector } from 'store/selectors';
import { ProfileSelector } from 'store/selectors/profile';

const MainRootScreen = () => {
    const { userId } = useSelector(AuthSelector);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { removeLoginDataAction } = useSelector(AuthSelector);
    const { removeProfileAction, updateProfileAction } =
        useSelector(ProfileSelector);

    const logOutClickHandler = () => {
        signOut(() => {
            batch(() => {
                removeLoginDataAction();
                removeProfileAction();
            });
        });
    };

    useEffect(() => {
        if (userId === '') {
            logOutClickHandler();
        } else {
            console.log('syncing for the first time');
            const userData = syncForTheFirstTime((data) =>
                updateProfileAction(data)
            );
            if (userData) updateProfileAction(userData);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userId]);

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
};

export default MainRootScreen;
