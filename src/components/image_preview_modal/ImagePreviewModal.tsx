/**
 * Author : Amit raikwar
 * Last updated : 06 Feb, 2024
 */
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export interface IImagePreviewModalProps {
  image: string;
}

export default function ImagePreviewModal(props: IImagePreviewModalProps) {
  return (
    <>
      <input type="checkbox" id="my_modal_7" className="modal-toggle" checked />
      <div className="modal-box w-11/12 max-w-5xl">
        <img src={props.image} alt="preview" />
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </>
  );
}
