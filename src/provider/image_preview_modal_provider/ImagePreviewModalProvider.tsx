/**
 * Author: Amit raikwar
 * Last updated: 06 Feb, 2024
 */
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import { useSelector } from "react-redux";
import ImagePreviewModal from "../../components/image_preview_modal/ImagePreviewModal";
import { RootState } from "../../data_store/Store";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Component definition for the notification provider component.
 * @param props The notification provider props.
 */
interface IImagePreviewModalProviderProps {
  children: React.ReactNode;
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Image preview modal provider component.
 * @param props The image preview modal provider props.
 * @returns The image preview modal provider component.
 */
function ImagePreviewModalProvider(props: IImagePreviewModalProviderProps) {
  const modalImage = useSelector((state: RootState) => state.modalImage);
  console.log("modalImage", modalImage);
  return (
    <div>
      <ImagePreviewModal image={modalImage} />
      {props.children}
    </div>
  );
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Export the ImagePreviewModalProvider component.
export default ImagePreviewModalProvider;
export type { IImagePreviewModalProviderProps };

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// End of file.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
