import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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
  initialState: initialState,
  reducers: {
    onLogin: (_state, action: PayloadAction<AuthData>) => {
      return action.payload;
    },
    onSignUp: (_state, action: PayloadAction<AuthData>) => {
      return action.payload;
    },
    onSignOut: (state) => {
      return initialState;
    },
  },
});

export const { onLogin, onSignUp, onSignOut } = authSlice.actions;

export default authSlice.reducer;
