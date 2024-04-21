import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { removeProfileKeyData } from '../../../service/local_storage/profile/ProfileStorageApi';
import { getAuthKeyData } from '../../../service/local_storage/auth/AuthStorageApi';
import { AuthData } from './types';

export const initialState: AuthData = {
    authToken: '',
    userData: {
        userId: '',
        firstName: '',
        lastName: '',
        email: '',
    },
};

const AUTH_SLICE_NAME = 'authSlice';

export const authSlice = createSlice({
    name: AUTH_SLICE_NAME,
    initialState: getAuthData(),
    reducers: {
        setLoginData: (_state, action: PayloadAction<AuthData>) => {
            return action.payload;
        },
        removeLoginData: () => {
            removeProfileKeyData();
            return initialState;
        },
    },
});

function getAuthData(): AuthData {
    const authData = getAuthKeyData();
    if (authData) {
        return authData;
    }

    return initialState;
}

function getAuthUserID(): string {
    const authData = getAuthKeyData();
    if (authData) {
        return authData.userData.userId;
    }

    return '';
}

export { getAuthUserID };
export { getAuthData };
