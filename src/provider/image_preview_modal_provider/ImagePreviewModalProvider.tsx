import { useSelector } from 'react-redux';
import { ImagePreviewModal } from 'components';
import { ImagePreviewModalProviderProps } from './types';
import { ImageModalSelector } from 'store/selectors';

const ImagePreviewModalProvider = (props: ImagePreviewModalProviderProps) => {
    const { modalImage } = useSelector(ImageModalSelector);
    return (
        <div>
            <ImagePreviewModal image={modalImage} />
            {props.children}
        </div>
    );
};

export default ImagePreviewModalProvider;
