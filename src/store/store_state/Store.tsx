import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from '../slice/projects/ProjectsSlice';
import {
    profileSlice,
    authSlice,
    notificationSlice,
    imageModalSlice,
} from '@store/slice';

/**
 * The redux store configuration.
 * @returns The redux store.
 *
 * Reducer;
 * 1. authReducer
 * 3. profileReducer
 * 4. notificationReducer
 * 6. projectsReducer
 * 7. imageModalReducer
 */
const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        profile: profileSlice.reducer,
        notification: notificationSlice.reducer,
        projects: projectsReducer,
        modalImage: imageModalSlice.reducer,
    },
});

// Export the store.
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store };
