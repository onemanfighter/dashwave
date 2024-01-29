enum ToastXPositions {
  START = "toast-start",
  CENTER = "toast-center",
  END = "toast-end",
}

enum ToastYPositions {
  TOP = "toast-top",
  CENTER = "toast-center",
  BOTTOM = "toast-bottom",
}

export interface IToastComponentProps {
  xposition?: ToastXPositions;
  yposition?: ToastYPositions;
  children: React.ReactNode;
}

export default function ToastComponent(props: IToastComponentProps) {
  return (
    <div className={`toast ${props.xposition} ${props.yposition}`}>
      {props.children}
    </div>
  );
}
