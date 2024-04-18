import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { removeProfileKeyData } from "../../../service/local_storage/profile/ProfileStorageApi";
import { getAuthKeyData } from "../../../service/local_storage/auth/AuthStorageApi";

/**
 * User data.
 */
interface UserData {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
}

/**
 * Auth data.
 */
interface AuthData {
  authToken: string;
  userData: UserData;
}

/**
 * Initial user data.
 */
const initialUserData: UserData = {
  userId: "",
  firstName: "",
  lastName: "",
  email: "",
};

/**
 * Initial auth data.
 */
const initialState: AuthData = {
  authToken: "",
  userData: initialUserData,
};

/**
 * The name of the auth slice.
 */
const AUTH_NAME = "auth_token";

/**
 * The auth slice.
 */
const authSlice = createSlice({
  name: AUTH_NAME,
  initialState: getAuthData(),
  reducers: {
    onLogin: (_state, action: PayloadAction<AuthData>) => {
      return action.payload;
    },
    onSignOut: () => {
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

function getAuthUserID(): string {
  const authData = getAuthKeyData();
  if (authData) {
    return authData.userData.userId;
  }

  return "";
}

// Export the auth slice.
export const { onLogin, onSignOut } = authSlice.actions;
export default authSlice.reducer;

export type { AuthData, UserData };
export { getAuthUserID };
export { getAuthData };
