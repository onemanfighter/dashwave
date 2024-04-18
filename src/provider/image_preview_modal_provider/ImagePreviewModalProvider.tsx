import { useSelector } from "react-redux";
import { RootState } from "store";
import { ImagePreviewModal } from "components";
import { ImagePreviewModalProviderProps } from "./types";

const ImagePreviewModalProvider = (props: ImagePreviewModalProviderProps) => {
  const modalImage = useSelector((state: RootState) => state.modalImage);
  return (
    <div>
      <ImagePreviewModal image={modalImage} />
      {props.children}
    </div>
  );
};

export default ImagePreviewModalProvider;
