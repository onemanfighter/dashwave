import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { NotificationData } from "../../components/notification/NotificationComponent";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * The name of the notification slice.
 */
const NOTIFICATION = "notification";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Notification state type definition.
 */
type NotificationState = NotificationData | null;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const initialNotificationState: NotificationState = null as NotificationState;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const notificationSlice = createSlice({
  name: NOTIFICATION,
  initialState: initialNotificationState,
  reducers: {
    showNotification: (_state, action: PayloadAction<NotificationState>) => {
      return action.payload;
    },
  },
});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Export the notification slice.
export const { showNotification } = notificationSlice.actions;
export default notificationSlice.reducer;

export type { NotificationState };
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
