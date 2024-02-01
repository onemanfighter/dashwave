import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  ToastXPosition,
  ToastYPosition,
} from "../../components/toast/ToastComponent";
import { AlertType } from "../../components/alert/Alert";
import { ToastAlertData } from "../../provider/alert_toast_provider/AlertToastProvider";

const TOAST_ALERT = "alert";

const initialToastAlertState: ToastAlertData = {
  alertData: {
    title: "",
    type: AlertType.INFO,
  },
  xPosition: ToastXPosition.START,
  yPosition: ToastYPosition.BOTTOM,
  bounce: false,
};

export const alertSlice = createSlice({
  name: TOAST_ALERT,
  initialState: initialToastAlertState,
  reducers: {
    showToastAlert: (_state, action: PayloadAction<ToastAlertData>) => {
      return action.payload;
    },
    hideToastAlert: () => {
      return initialToastAlertState;
    },
  },
});

const { showToastAlert, hideToastAlert } = alertSlice.actions;

/**
 * Show the alert with a timeout.
 *
 * @param dispatch The dispatch function.
 * @param alertData The alert data.
 * @param timeMS The time in milliseconds.
 */
export function showAlertWithTimeout(
  dispatch: any,
  alertData: ToastAlertData,
  timeMS: number
) {
  dispatch(showToastAlert(alertData));
  setTimeout(() => {
    dispatch(hideToastAlert());
  }, timeMS);
}

export default alertSlice.reducer;
