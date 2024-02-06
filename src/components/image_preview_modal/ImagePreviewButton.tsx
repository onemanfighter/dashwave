/**
 * Author: Amit raikwar
 * Last updated: 06 Feb, 2024
 */
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import { IMAGE_MODAL_ID } from "./ImagePreviewModal";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * The image modal button props.
 * @param onClickHandler The on click handler of the button.
 * @param children The children of the button.
 */
interface IImagePreviewModalButtonProps {
  onClickHandler: () => void;
  children: React.ReactNode;
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Image modal button component.
 *
 * @param props  The image modal button props.
 * @returns The image modal button component.
 */
function ImagePreviewModalButton(props: IImagePreviewModalButtonProps) {
  return (
    <label htmlFor={IMAGE_MODAL_ID} onClick={props.onClickHandler}>
      {props.children}
    </label>
  );
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Export the ImagePreviewModalButton component.
export default ImagePreviewModalButton;
export type { IImagePreviewModalButtonProps };

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// End of file.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
