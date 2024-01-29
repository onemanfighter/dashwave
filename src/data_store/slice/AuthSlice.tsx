import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AuthTokenKey } from "../../service/local_storage/token_constants/StorageConstant";
import { removeProfileKeyData } from "../../service/local_storage/profile/ProfileStorageApi";
import { getAuthKeyData } from "../../service/local_storage/auth/AuthStorageApi";

export interface UserData {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface AuthData {
  authToken: string;
  userData: UserData;
}

const initialUserData: UserData = {
  userId: "",
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
      return action.payload;
    },
    onSignOut: (state) => {
      removeProfileKeyData();
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
  const authData = getAuthKeyData();
  if (authData) {
    return authData;
  }

  return initialState;
}

export const { onLogin, onSignOut } = authSlice.actions;

export default authSlice.reducer;
