import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/AuthSlice";
import themeReducer from "./slice/ThemeSlice";
import notificationReducer from "./slice/NotificationSlice";
import profileReducer from "./slice/ProfileSlice";
import toastAlertReducer from "./slice/ToastAlertSlice";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * The redux store.
 */
const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
    profile: profileReducer,
    notification: notificationReducer,
    toastAlert: toastAlertReducer,
  },
});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Export the store.
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
