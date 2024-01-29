import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const ALERT = "alert";

const initialAlertState = false;

export const alertSlice = createSlice({
  name: ALERT,
  initialState: initialAlertState,
  reducers: {
    showAlert: (_state, action: PayloadAction<boolean>) => {
      return action.payload;
    },
  },
});

export const { showAlert } = alertSlice.actions;

export default alertSlice.reducer;
