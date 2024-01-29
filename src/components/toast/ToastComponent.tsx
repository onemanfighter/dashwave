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

export interface IToastComponentProps {
  xposition?: ToastXPosition;
  yposition?: ToastYPosition;
  children: React.ReactNode;
  bounce?: boolean;
}

export default function ToastComponent(props: IToastComponentProps) {
  return (
    <div
      className={`toast ${
        props.bounce !== null && !props.bounce ? "" : "animate-bounce"
      } ${props.xposition ? props.xposition : ""} ${
        props.yposition ? props.yposition : ""
      }`}
    >
      {props.children}
    </div>
  );
}
