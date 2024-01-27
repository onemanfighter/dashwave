import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface NotificationData {
  title: string;
  description: string;
  type: "success" | "error" | "warning" | "info";
  duration: number;
}

const initialData: NotificationData = {
  title: "",
  description: "",
  type: "success",
  duration: 0,
};

const NOTIFICATION = "notification";

export const notificationSlice = createSlice({
  name: NOTIFICATION,
  initialState: initialData,
  reducers: {
    showNotification: (_state, action: PayloadAction<NotificationData>) => {
      return action.payload;
    },
  },
});

export const { showNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
