/**
 * Author: Amit raikwar
 * Last updated: 04 Feb, 2024
 */
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ToastXPosition, ToastYPosition } from "../../components";
import { AlertType } from "../../components/alert/Alert";
import { ToastAlertData } from "../../provider/alert_toast_provider/AlertToastProvider";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * The name of the toast alert slice.
 */
const TOAST_ALERT = "alert";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Initial toast alert state.
 */
const initialToastAlertState: ToastAlertData = {
  alertData: {
    title: "",
    type: AlertType.INFO,
  },
  xPosition: ToastXPosition.START,
  yPosition: ToastYPosition.BOTTOM,
  bounce: false,
};

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * The toast alert slice.
 */
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

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Show the alert with a timeout.
 *
 * @param dispatch The dispatch function.
 * @param alertData The alert data.
 * @param timeMS The time in milliseconds.
 */
function showAlertWithTimeout(
  dispatch: any,
  alertData: ToastAlertData,
  timeMS: number
) {
  dispatch(showToastAlert(alertData));
  setTimeout(() => {
    dispatch(hideToastAlert());
  }, timeMS);
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const { showToastAlert, hideToastAlert } = alertSlice.actions;
export default alertSlice.reducer;

export type { ToastAlertData };
export { showAlertWithTimeout };

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// End of file
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
