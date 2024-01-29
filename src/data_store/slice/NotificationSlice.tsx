import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { NotificationData } from "../../components/notification/NotificationComponent";

const NOTIFICATION = "notification";

export type NotificationState = NotificationData | null;

const initialNotificationState: NotificationState = null as NotificationState;

export const notificationSlice = createSlice({
  name: NOTIFICATION,
  initialState: initialNotificationState,
  reducers: {
    showNotification: (_state, action: PayloadAction<NotificationState>) => {
      return action.payload;
    },
  },
});

export const { showNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
