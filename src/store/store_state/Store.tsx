import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../slice/theme/ThemeSlice';
import notificationReducer from '../slice/notification/NotificationSlice';
import profileReducer from '../slice/profile/ProfileSlice';
import toastAlertReducer from '../slice/toast_alert/ToastAlertSlice';
import projectsReducer from '../slice/projects/ProjectsSlice';
import imageModalReducer from '../slice/image_modal/ImageModalSlice';
import { authSlice } from 'store/slice';

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
        auth: authSlice.reducer,
        theme: themeReducer,
        profile: profileReducer,
        notification: notificationReducer,
        toastAlert: toastAlertReducer,
        projects: projectsReducer,
        modalImage: imageModalReducer,
    },
});

// Export the store.
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store };
