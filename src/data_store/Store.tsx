/**
 * Author: Amit raikwar
 * Last updated: 06 Feb, 2024
 */
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/AuthSlice";
import themeReducer from "./slice/ThemeSlice";
import notificationReducer from "./slice/NotificationSlice";
import profileReducer from "./slice/ProfileSlice";
import toastAlertReducer from "./slice/ToastAlertSlice";
import projectsReducer from "./slice/projects/ProjectsSlice";
import imageModalReducer from "./slice/ImageModalSlice";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * The redux store configuration.
 * @returns The redux store.
 *
 * Reducer;
 * 1. authReducer
 * 2. themeReducer
 * 3. profileReducer
 * 4. notificationReducer
 * 5. toastAlertReducer
 * 6. projectsReducer
 * 7. imageModalReducer
 */
const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
    profile: profileReducer,
    notification: notificationReducer,
    toastAlert: toastAlertReducer,
    projects: projectsReducer,
    modalImage: imageModalReducer,
  },
});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Export the store.
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store };

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// End of file.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
