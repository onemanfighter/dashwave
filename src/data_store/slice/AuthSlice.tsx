import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  removeAuthKeyData,
  storeAuthkeyData,
} from "../../service/local_storage/auth/AuthStorageApi";
import { AuthTokenKey } from "../../service/local_storage/token_constants/StorageConstant";
import { removeProfileKeyData } from "../../service/local_storage/profile/ProfileStorageApi";

export interface UserData {
  firstName: string;
  lastName: string;
  email: string;
}

export interface AuthData {
  authToken: string;
  userData: UserData;
}

const initialUserData: UserData = {
  firstName: "",
  lastName: "",
  email: "",
};

const initialState: AuthData = {
  authToken: "",
  userData: initialUserData,
};

const AUTH_NAME = "authtoken";

export const authSlice = createSlice({
  name: AUTH_NAME,
  initialState: getAuthData(),
  reducers: {
    onLogin: (_state, action: PayloadAction<AuthData>) => {
      storeAuthkeyData(action.payload);
      return action.payload;
    },
    onSignUp: (_state, action: PayloadAction<AuthData>) => {
      storeAuthkeyData(action.payload);
      return action.payload;
    },
    onSignOut: (state) => {
      removeProfileKeyData();
      removeAuthKeyData();
      return initialState;
    },
  },
});

/**
 * Get the auth data from the local storage.
 *
 * @returns The auth data from the local storage.
 */
function getAuthData(): AuthData {
  const authData = localStorage.getItem(AuthTokenKey);
  if (authData) {
    return JSON.parse(authData);
  }
  return initialState;
}

export const { onLogin, onSignUp, onSignOut } = authSlice.actions;

export default authSlice.reducer;
