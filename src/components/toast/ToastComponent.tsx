import AlertComponent, { AlertComponentData } from "../alert/Alert";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Toast x position.
 */
enum ToastXPosition {
  START = "toast-start",
  CENTER = "toast-center",
  END = "toast-end",
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Toast y position.
 */
enum ToastYPosition {
  TOP = "toast-top",
  CENTER = "toast-center",
  BOTTOM = "toast-bottom",
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Toast alert component props.
 */
interface IToastAlertComponentProps {
  alertComponentData: AlertComponentData;
  xposition?: ToastXPosition;
  yposition?: ToastYPosition;
  bounce?: boolean;
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Toast alert component.
 *
 * @param props  The toast alert component props.
 * @returns The toast alert component.
 */
function ToastAlertComponent(props: IToastAlertComponentProps) {
  return props.alertComponentData.title === "" ? (
    <></>
  ) : (
    <div
      className={`toast z-50 ${
        props.bounce !== null && !props.bounce ? "" : "animate-bounce"
      } ${props.xposition ? props.xposition : ""} ${
        props.yposition ? props.yposition : ""
      }`}
    >
      <AlertComponent
        title={props.alertComponentData.title}
        type={props.alertComponentData.type}
      />
    </div>
  );
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Export the ToastAlertComponent.
export default ToastAlertComponent;
export type { IToastAlertComponentProps, ToastXPosition, ToastYPosition };

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
