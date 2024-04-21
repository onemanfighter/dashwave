import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ToastAlertData } from '@provider';
import { AlertType, ToastXPosition, ToastYPosition } from '@dash-ui';

/**
 * The name of the toast alert slice.
 */
const TOAST_ALERT = 'alert';

/**
 * Initial toast alert state.
 */
const initialToastAlertState: ToastAlertData = {
    alertData: {
        title: '',
        type: AlertType.INFO,
    },
    xPosition: ToastXPosition.START,
    yPosition: ToastYPosition.BOTTOM,
    bounce: false,
};

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
