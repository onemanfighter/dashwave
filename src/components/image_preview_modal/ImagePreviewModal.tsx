/**
 * Author : Amit raikwar
 * Last updated : 06 Feb, 2024
 */
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/**
 * The image modal component id.
 */
const IMAGE_MODAL_ID = "modal_image";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * The image modal props.
 * @param image The image url to be displayed in the modal.
 */
interface IImagePreviewModalProps {
  image: string;
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Image modal component.
 *
 * @param props  The image modal props.
 * @returns The image modal component.
 */
function ImagePreviewModal(props: IImagePreviewModalProps) {
  return (
    <div className="z-50 ">
      <input type="checkbox" id={IMAGE_MODAL_ID} className="modal-toggle" />
      <div className="modal overflow-scroll" role="dialog">
        <div className=" px-2 bg-base-200 rounded-lg w-[70%] h-[90%]">
          <div className="modal-action">
            <label
              htmlFor={IMAGE_MODAL_ID}
              className="btn btn-outline btn-error btn-circle btn-sm"
            >
              ✕
            </label>
          </div>
          <img
            src={props.image}
            alt="preview"
            loading="lazy"
            className=" rounded-xl object-cover w-full h-[90%]"
          ></img>
        </div>
      </div>
    </div>
  );
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Export the ImagePreviewModal component.
export default ImagePreviewModal;
export type { IImagePreviewModalProps };
export { IMAGE_MODAL_ID };

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// End of file.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
