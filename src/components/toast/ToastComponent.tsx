import AlertComponent, { AlertComponentData } from "../alert/Alert";

export enum ToastXPosition {
  START = "toast-start",
  CENTER = "toast-center",
  END = "toast-end",
}

export enum ToastYPosition {
  TOP = "toast-top",
  CENTER = "toast-center",
  BOTTOM = "toast-bottom",
}

export interface IToastAlertComponentProps {
  alertComponentData: AlertComponentData;
  xposition?: ToastXPosition;
  yposition?: ToastYPosition;
  bounce?: boolean;
}

export default function ToastAlertComponent(props: IToastAlertComponentProps) {
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
