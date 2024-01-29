export enum NotificationButtonType {
  PRIMARY = "btn-primary",
  SECONDARY = "btn-secondary",
  SUCCESS = "btn-success",
  DANGER = "btn-danger",
  WARNING = "btn-warning",
  INFO = "btn-info",
  LIGHT = "btn-light",
  DARK = "btn-dark",
  LINK = "btn-link",
}

export interface INotificationButtonProps {
  buttonText: string;
  onClickHandler: () => void;
  buttonType?: NotificationButtonType;
  isButtonOutline?: boolean;
}

export default function NotificationButton(props: INotificationButtonProps) {
  return (
    <div>
      <label
        htmlFor="notification_modal"
        className={`btn ${props.buttonType} ${
          props.isButtonOutline ? "btn-outline" : ""
        }`}
        onClick={props.onClickHandler}
      >
        {props.buttonText}
      </label>
    </div>
  );
}
