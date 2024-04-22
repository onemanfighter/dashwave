import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from '../slice/projects/ProjectsSlice';
import { profileSlice, notificationSlice, imageModalSlice } from '@store/slice';

/**
 * The redux store configuration.
 * @returns The redux store.
 *
 * Reducer;
 * 1. profileReducer
 * 2. notificationReducer
 * 3. projectsReducer
 * 4. imageModalReducer
 */
const store = configureStore({
    reducer: {
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
