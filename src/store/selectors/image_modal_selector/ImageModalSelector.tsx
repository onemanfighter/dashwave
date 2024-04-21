import { useDispatch } from 'react-redux';
import { imageModalSlice } from '@store/slice/image_modal/ImageModalSlice';
import { RootState } from '@store/store_state';

export const ImageModalSelector = (state: RootState) => {
    const dispatch = useDispatch();
    const { setModalImage } = imageModalSlice.actions;

    const setModalImageAction = (payload: string) => {
        dispatch(setModalImage(payload));
    };

    return {
        modalImage: state.modalImage,
        setModalImageAction,
    };
};
