import { configureStore } from '@reduxjs/toolkit';
import { profileSlice } from '@store/slice';

/**
 * The redux store configuration.
 * @returns The redux store.
 *
 * Reducer;
 * 1. profileReducer
 */
const store = configureStore({
    reducer: {
        profile: profileSlice.reducer,
    },
});

// Export the store.
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store };
