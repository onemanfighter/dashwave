import { AppStoreState } from '@zustand_store';

export const imageModalSelector = (state: AppStoreState) => ({
    imageString: state.ImageModal.imageString,
    setImageString: state.ImageModal.setImageString,
});
