import { AppStoreState } from '@zustand_store/store';
import { getAuthKeyData } from 'src/service/local_storage/auth/AuthStorageApi';

export const authSelector = (state: AppStoreState) => ({
    userId: state.Auth.userData.userId,
    authToken: state.Auth.authToken,
    userData: state.Auth.userData,
    setLoginData: state.Auth.setLoginData,
    removeLoginData: state.Auth.removeLoginData,
    getAuthUserID: (): string => {
        const authData = getAuthKeyData();
        if (authData) {
            return authData.userData.userId;
        }
        return '';
    },
});
