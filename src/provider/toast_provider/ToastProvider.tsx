import { useSelector } from "react-redux";
import { RootState } from "../../data_store/Store";
import ToastComponent from "../../components/toast/ToastComponent";

/**
 * Interface definition for the toast provider props.
 */
export interface IToastProviderProps {
  children: React.ReactNode;
}

/**
 * Component definition for the toast provider.
 * @param props The props for the toast provider.
 * @returns The toast provider component.
 */
export default function ToastProvider(props: IToastProviderProps) {
  const toastAlert = useSelector((state: RootState) => state.toastAlert);

  return (
    <div>
      <ToastComponent
        children={toastAlert.children}
        xposition={toastAlert.xPosition}
        yposition={toastAlert.yPosition}
      />
      {props.children}
    </div>
  );
}
