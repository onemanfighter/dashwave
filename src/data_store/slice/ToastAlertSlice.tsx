import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  ToastXPosition,
  ToastYPosition,
} from "../../components/toast/ToastComponent";

const ALERT = "alert";

export interface ToastAlertData {
  children: React.ReactNode;
  xPosition?: ToastXPosition;
  yPosition?: ToastYPosition;
}

const initialAlertState: ToastAlertData = {
  children: "",
  xPosition: ToastXPosition.START,
  yPosition: ToastYPosition.BOTTOM,
};

export const alertSlice = createSlice({
  name: ALERT,
  initialState: initialAlertState,
  reducers: {
    showAlert: (_state, action: PayloadAction<ToastAlertData>) => {
      return action.payload;
    },
    hideAlert: () => {
      return initialAlertState;
    },
  },
});

const { showAlert, hideAlert } = alertSlice.actions;

export function showAlertWithTimeout(
  dispatch: any,
  alertData: ToastAlertData,
  timeMS: number
) {
  dispatch(showAlert(alertData));
  setTimeout(() => {
    dispatch(hideAlert());
  }, timeMS);
}

export default alertSlice.reducer;
