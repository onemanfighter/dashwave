import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const IMAGE_MODAL = 'imageModal';

const initialImageModelState = '';

export const imageModalSlice = createSlice({
    name: IMAGE_MODAL,
    initialState: initialImageModelState,
    reducers: {
        setModalImage: (_state, action: PayloadAction<string>) => {
            return action.payload;
        },
    },
});
