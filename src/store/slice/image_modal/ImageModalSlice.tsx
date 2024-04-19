import { PayloadAction, createSlice } from '@reduxjs/toolkit';

/**
 * The name of the image modal url slice.
 */
const IMAGE_MODAL = 'imageModal';

/**
 * The initial state of the image modal url slice.
 */
const initialImageModelState = '';

/**
 * The image modal slice.
 */
const imageModalSlice = createSlice({
    name: IMAGE_MODAL,
    initialState: initialImageModelState,
    reducers: {
        setModalImage: (_state, action: PayloadAction<string>) => {
            return action.payload;
        },
    },
});

// Export the image modal url slice.
export const { setModalImage } = imageModalSlice.actions;
export default imageModalSlice.reducer;
